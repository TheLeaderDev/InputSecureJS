
#  Full Tutorial and Usage Guide for InputSecureJS 📃

On this page, you’ll learn exactly how the InputSecureJS script works.
All its settings and options are explained with examples, so you can easily use this script in your HTML projects.

You can test all features live through the link below :
<a href="https://github.com/Amir-Hosein-Amiri/InputSecureJS/blob/main/help.md" target="_blank">Online Demo and Customization</a>

Additionally, graphical customization and exporting of the global configuration settings are available.
⭐ With your support, a more advanced graphical customization section will be added in the future.

Now, let’s go through the detailed explanations of the script step-by-step and section-by-section :

---

## 1. Global Configuration

```js
const config = {
  enableDebug: false,
  enableSQLInjectionFilter: true,
  enableMultilangSupport: true,
  enableEmojisFilter: true,
  enableXSSFilter: true,
  enableBadWordsFilter: true,
  enableCharFilter: true,
};
```

| Config Option              | Description                                                                 | Default | Notes                                                                 |
|---------------------------|-----------------------------------------------------------------------------|---------|-----------------------------------------------------------------------|
| `enableDebug`             | Enables console debug logging                                               | false   | If `true`, all input changes are logged in the console                |
| `enableSQLInjectionFilter`| Enables SQL Injection pattern removal                                       | true    | Prevents common SQL Injection attacks                                 |
| `enableMultilangSupport`  | Allows input in multiple languages (e.g. Persian, Russian, Chinese)         | true    | If `false`, only limited characters are allowed                       |
| `enableEmojisFilter`      | Filters out emojis and suspicious Unicode characters                        | true    | Removes emojis and strange characters                                 |
| `enableXSSFilter`         | Removes HTML tags and scripts                                               | true    | Strips dangerous tags like `<script>`, `<iframe>` etc.                |
| `enableBadWordsFilter`    | Filters out defined bad words and replaces them with `***`                  | true    | Uses `data-badwords` attribute                                        |
| `enableCharFilter`        | Filters invalid characters based on secure type and pattern                 | true    | Strict character control                                              |

---

## 2. Input Attributes

| Attribute                   | Type     | Description                                                                  | Example Value                       |
|----------------------------|----------|------------------------------------------------------------------------------|-------------------------------------|
| `data-secure-type`         | String   | Input data type used to apply regex & filtering logic                        | `string`, `number`, `email`, etc.  |
| `data-allow`               | String   | Additional allowed characters in input                                       | `"@_-."`                            |
| `maxlength`                | Number   | Maximum length allowed in input                                              | `50`, `100`                         |
| `data-badwords`            | String   | Comma-separated list of bad words to filter                                  | `"foo,bar,badword"`                |
| `data-allow-copy`          | Boolean  | Controls copy/cut behavior                                                   | `"true"` or `"false"`              |
| `data-allow-paste`         | Boolean  | Controls paste behavior                                                      | `"true"` or `"false"`              |
| `data-enable-xss-filter`   | Boolean  | Enable/disable XSS filter for this input (overrides global config)           | `"true"` or `"false"`              |
| `data-enable-emojis-filter`| Boolean  | Enable/disable emoji filter for this input                                   | `"true"` or `"false"`              |
| `data-enable-badwords-filter`| Boolean| Enable/disable bad word filter                                               | `"true"` or `"false"`              |
| `data-enable-sql-filter`   | Boolean  | Enable/disable SQL Injection filter                                          | `"true"` or `"false"`              |
| `data-enable-multilang`    | Boolean  | Enable/disable multilingual support                                          | `"true"` or `"false"`              |
| `data-enable-char-filter`  | Boolean  | Enable/disable character whitelist logic                                     | `"true"` or `"false"`              |

---

## 3. `data-secure-type` Values & Character Rules

| Value       | Description                          | Allowed Characters (Regex)                                | Notes                                    |
|-------------|--------------------------------------|------------------------------------------------------------|------------------------------------------|
| `string`    | Letters (any allowed language)       | English + activated languages + allowed chars              | Filters out non-letter characters        |
| `number`    | Numbers only                         | `0-9` + allowed characters                                  | Only digits allowed                      |
| `mixed`     | Letters + numbers                    | Letters + digits + allowed chars                           | Accepts anything except blocked patterns |
| `persian`   | Persian letters only                 | Persian characters + allowed chars                         | No English letters                       |
| `english`   | English letters only                 | a-z, A-Z + allowed characters                              | Only English                             |
| `username`  | Letters + numbers + underscore       | a-z, A-Z, 0-9, `_`, allowed chars                          | Typical for usernames                    |
| `password`  | All symbols                          | Alphanumerics + special characters                         | Accepts symbols like `@!#$`              |
| `email`     | Valid email parts                    | a-z, A-Z, 0-9, @, ., _, -, +, allowed chars                | Simplified email pattern                 |
| `slug`      | Slug/URL-friendly                    | lowercase letters, numbers, `_`, `-`                       | For slugs and permalinks                 |
| `phone`     | Phone number format                  | Numbers + `+`, allowed chars                               | International format supported           |
| `date`      | Date formats                         | Digits + `/` and `-`, allowed chars                        | For `YYYY-MM-DD`, etc.                   |
| `no-space`  | No whitespace                        | Allowed characters excluding spaces                        | Whitespace removed                       |
| `default`   | Default fallback                     | Letters, numbers, allowed langs and chars                  | Default pattern                          |

---

## 4. Filter Behavior on Input

When the user types or modifies input, filters are applied in this order:

1. Strip dangerous HTML tags (XSS filter)
2. Filter characters based on `data-secure-type`
3. Trim to `maxlength`
4. Remove emojis and strange Unicode
5. Remove SQL injection patterns
6. Replace bad words with `***`
7. Log changes to console if `enableDebug` is true

---

## 5. Copy & Paste Behavior

| Attribute          | Description                             | Default | Example |
|-------------------|-----------------------------------------|---------|---------|
| `data-allow-copy` | Allow cut/copy in input                 | `true`  | `false` |
| `data-allow-paste`| Allow paste in input                    | `true`  | `false` |

If set to `"false"`, copy/cut/paste actions will be blocked via event handling.

---

## 6. Final Example in HTML

```html
<input 
  type="text"
  name="username"
  maxlength="30"
  data-secure-type="username"
  data-allow="_-"
  data-badwords="badword1,badword2"
  data-allow-copy="false"
  data-allow-paste="true"
  data-enable-xss-filter="true"
  data-enable-sql-filter="false" />
```

- Allows only letters, digits, `_`, and `-`
- Filters `badword1`, `badword2`
- Copy/Cut is disabled, Paste is allowed
- XSS filter is active, SQL filter is disabled



<details>
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
# 🛡️ پاک‌سازی امن ورودی‌ها – Secure Input Sanitizer

این مستند نحوه استفاده از اسکریپت SecureInputs برای فیلتر و پاکسازی ورودی‌ها را توضیح می‌دهد. این اسکریپت برای جلوگیری از حملات XSS، تزریق SQL، ورود کلمات نامناسب، ایموجی‌ها و کاراکترهای غیرمجاز طراحی شده است.

## 🔧 تنظیمات کلی

| نام تنظیم | توضیح | مقدار پیش‌فرض | نکات مهم |
|-----------|-------|----------------|-----------|
| enableDebug | فعال‌سازی نمایش تغییرات در کنسول | false | برای مشاهده لاگ‌ها |
| enableSQLInjectionFilter | فعال‌سازی فیلتر SQL | true | جلوگیری از SQL Injection |
| enableMultilangSupport | پشتیبانی چندزبانه | true | اگر false باشد فقط حروف فارسی مجاز هستند |
| enableEmojisFilter | حذف ایموجی | true | حذف ایموجی و Unicode مشکوک |
| enableXSSFilter | فیلتر XSS | true | حذف تگ‌های HTML خطرناک |
| enableBadWordsFilter | فیلتر کلمات بد | true | جایگزینی کلمات با *** |
| enableCharFilter | فیلتر بر اساس نوع ورودی | true | حذف کاراکترهای غیرمجاز |

## 🏷️ اتریبیوت‌های ورودی

| نام اتریبیوت | نوع داده | توضیح | مثال مقدار |
|--------------|-----------|--------|-------------|
| data-secure-type | String | نوع داده ورودی | string, number, email |
| data-allow | String | کاراکترهای اضافی مجاز | @_-. |
| maxlength | Number | حداکثر طول مجاز | 50 |
| data-badwords | String | کلمات نامناسب جداشده با کاما | badword1,badword2 |
| data-allow-copy | Boolean | اجازه کپی/کات | true / false |
| data-allow-paste | Boolean | اجازه پیست | true / false |
| data-enable-xss-filter | Boolean | فعال‌سازی XSS خاص | true / false |
| data-enable-emojis-filter | Boolean | فعال‌سازی فیلتر ایموجی | true / false |
| data-enable-badwords-filter | Boolean | فعال‌سازی فیلتر بد | true / false |
| data-enable-sql-filter | Boolean | فعال‌سازی SQL | true / false |
| data-enable-multilang | Boolean | فعال‌سازی چندزبانه | true / false |
| data-enable-char-filter | Boolean | فعال‌سازی فیلتر کاراکتر | true / false |

## 🔠 انواع data-secure-type

| مقدار | توضیح | الگوی مجاز | توضیح بیشتر |
|--------|--------|--------------|----------------|
| string | فقط حروف | حروف زبان‌های مجاز | حروف غیرمجاز حذف می‌شود |
| number | فقط عدد | 0-9 | غیر عدد حذف می‌شود |
| mixed | ترکیبی | حروف، اعداد | حذف موارد غیرمجاز |
| persian | فقط فارسی | الفبای فارسی | بدون حروف دیگر |
| english | فقط انگلیسی | a-zA-Z | بدون زبان دیگر |
| username | نام کاربری | حروف + اعداد + _ | استاندارد یوزرنیم |
| password | رمز عبور | شامل نمادها | کاراکترهای امنیتی مجاز |
| email | ایمیل | ساختار ساده ایمیل | شامل @ و . و غیره |
| slug | URL-friendly | حروف کوچک + - و _ | برای URL استفاده می‌شود |
| phone | شماره تماس | اعداد و + | شماره بین‌المللی |
| date | تاریخ | اعداد + / یا - | YYYY-MM-DD |
| no-space | بدون فاصله | هر چیز به جز فاصله | فاصله حذف می‌شود |
| default | حالت پیش‌فرض | حروف و اعداد و زبان‌های مجاز | ترکیبی آزاد |

## ⚙️ ترتیب فیلتر هنگام ورودی

1. حذف تگ‌های XSS
2. حذف کاراکترهای غیرمجاز
3. اعمال maxlength
4. حذف ایموجی‌ها
5. فیلتر SQL Injection
6. فیلتر کلمات نامناسب
7. نمایش تغییرات در کنسول در صورت enableDebug

## 📋 کنترل کپی و پیست

| اتریبیوت | توضیح | مقدار پیش‌فرض |
|----------|--------|----------------|
| data-allow-copy | اجازه کپی | true |
| data-allow-paste | اجازه پیست | true |

## 🧪 مثال نهایی

```html
<input 
  type="text"
  name="username"
  maxlength="30"
  data-secure-type="username"
  data-allow="_-"
  data-badwords="badword1,badword2"
  data-allow-copy="false"
  data-allow-paste="true"
  data-enable-xss-filter="true"
  data-enable-sql-filter="false" />
```

کلمات نامناسب فیلتر می‌شوند، فقط حروف و اعداد و - و _ مجاز است.
کپی غیرفعال، پیست فعال.
</details>
