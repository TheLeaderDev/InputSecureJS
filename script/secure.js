document.addEventListener('DOMContentLoaded', () => {
  // ====== Configuration Section ======
  const config = {
    enableDebug: false,
    enableSQLInjectionFilter: true,
    enableMultilangSupport: true,
    enableEmojisFilter: true,
    enableXSSFilter: true,
    enableBadWordsFilter: true, 
    enableCharFilter: true,      
  };

  const secureInputs = document.querySelectorAll('input[data-secure-type], textarea[data-secure-type]');

  secureInputs.forEach(input => {
    const type = input.getAttribute('data-secure-type');
    const allow = input.getAttribute('data-allow') || '';
    const maxLength = parseInt(input.getAttribute('maxlength')) || Infinity;
    const badWords = (input.getAttribute('data-badwords') || '').split(',').map(w => w.trim().toLowerCase());
    const allowCopy = input.getAttribute('data-allow-copy') !== 'false';
    const allowPaste = input.getAttribute('data-allow-paste') !== 'false';

    const localEnableXSS = input.hasAttribute('data-enable-xss-filter') ? input.getAttribute('data-enable-xss-filter') === 'true' : config.enableXSSFilter;
    const localEnableEmojis = input.hasAttribute('data-enable-emojis-filter') ? input.getAttribute('data-enable-emojis-filter') === 'true' : config.enableEmojisFilter;
    const localEnableBadWords = input.hasAttribute('data-enable-badwords-filter') ? input.getAttribute('data-enable-badwords-filter') === 'true' : config.enableBadWordsFilter;
    const localEnableSQLInjection = input.hasAttribute('data-enable-sql-filter') ? input.getAttribute('data-enable-sql-filter') === 'true' : config.enableSQLInjectionFilter;
    const localEnableMultilang = input.hasAttribute('data-enable-multilang') ? input.getAttribute('data-enable-multilang') === 'true' : config.enableMultilangSupport;
    const localEnableCharFilter = input.hasAttribute('data-enable-char-filter') ? input.getAttribute('data-enable-char-filter') === 'true' : config.enableCharFilter;

    if (!allowCopy) {
      input.addEventListener('copy', e => e.preventDefault());
      input.addEventListener('cut', e => e.preventDefault());
    }

    if (!allowPaste) {
      input.addEventListener('paste', e => e.preventDefault());
    }

    const escapeForRegex = str => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const allowedExtras = allow.split('').map(char => escapeForRegex(char)).join('');

    const persianChars = '\u0600-\u06FF';
    const russianChars = '\u0400-\u04FF';
    const chineseChars = '\u4E00-\u9FFF';

    let langRange = persianChars;
    if (localEnableMultilang) {
      langRange += russianChars + chineseChars;
    }

    const sqlInjectionPatterns = [
      /(\b)(or|and)(\b).*=.*--/gi,
      /(['"])(\s*or\s*|\s*and\s*)\1/gi,
      /--/g,
      /(['"]);?\s*drop\s+table/gi,
      /union(\s+all)?\s+select/gi,
      /insert\s+into/gi,
      /select\s+.*\s+from/gi,
    ];

    let regex;
    switch (type) {
      case 'string':
        regex = new RegExp(`[^a-zA-Z${langRange}${allowedExtras}]`, 'g');
        break;
      case 'number':
        regex = new RegExp(`[^0-9${allowedExtras}]`, 'g');
        break;
      case 'mixed':
        regex = new RegExp(`[^a-zA-Z0-9${langRange}${allowedExtras}]`, 'g');
        break;
      case 'persian':
        regex = new RegExp(`[^${langRange}${allowedExtras}]`, 'g');
        break;
      case 'english':
        regex = new RegExp(`[^a-zA-Z${allowedExtras}]`, 'g');
        break;
      case 'username':
        regex = new RegExp(`[^a-zA-Z0-9_${allowedExtras}]`, 'g');
        break;
      case 'password':
        regex = new RegExp(`[^a-zA-Z0-9!@#$%^&*()_+=\\[\\]{}|:;,.?~${allowedExtras}]`, 'g');
        break;
      case 'email':
        regex = new RegExp(`[^a-zA-Z0-9@._\\-+${allowedExtras}]`, 'g');
        break;
      case 'slug':
        regex = new RegExp(`[^a-z0-9\\-_${allowedExtras}]`, 'g');
        break;
      case 'phone':
        regex = new RegExp(`[^0-9${allowedExtras}\\+]`, 'g');
        break;
      case 'date':
        regex = new RegExp(`[^0-9\\-/${allowedExtras}]`, 'g');
        break;
      case 'no-space':
        regex = new RegExp(`[\\s${allowedExtras ? `^${allowedExtras}` : ''}]`, 'g');
        break;
      default:
        regex = new RegExp(`[^a-zA-Z0-9${langRange}${allowedExtras}]`, 'g');
    }

    const stripDangerousHTML = str => {
      const div = document.createElement('div');
      div.innerHTML = str;
      const scripts = div.querySelectorAll('script, iframe, object, embed, link, style');
      scripts.forEach(tag => tag.remove());
      return div.textContent || div.innerText || '';
    };

    const removeSuspicious = str => str.replace(/[\u2000-\u3300\uD800-\uDFFF\uFE00-\uFEFF\uFFF0-\uFFFF]/g, '');

    input.addEventListener('input', () => {
      let value = input.value;
      const original = value;

      if (localEnableXSS) {
        value = stripDangerousHTML(value);
      }

      if (localEnableCharFilter) {
        value = value.replace(regex, '');
      }

      value = value.slice(0, maxLength);

      if (localEnableEmojis) {
        value = removeSuspicious(value);
      }

      if (localEnableSQLInjection) {
        sqlInjectionPatterns.forEach(pattern => {
          if (pattern.test(value)) {
            value = value.replace(pattern, '');
          }
        });
      }

      if (localEnableBadWords && badWords.length > 0) {
        badWords.forEach(word => {
          const bad = new RegExp(`\\b${escapeForRegex(word)}\\b`, 'gi');
          value = value.replace(bad, '***');
        });
      }

      if (config.enableDebug && original !== value) {
        console.warn(`Cleaned [${input.name || input.id || 'unknown'}]:`, original, '=>', value);
      }

      input.value = value;
    });
  });
});
