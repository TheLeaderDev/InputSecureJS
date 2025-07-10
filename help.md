# Secure Input Sanitizer 🛡️

This script is a protective module for HTML forms that sanitizes user input based on type and custom settings to prevent threats like XSS, SQL Injection, profanity, emojis, and invalid characters.

## 📦 Features

### 1. XSS Filter (`enableXSSFilter`)
Removes dangerous HTML/script tags from input.
- **Example:** `<script>alert("x")</script>` → `alert("x")`

### 2. SQL Injection Filter (`enableSQLInjectionFilter`)
Detects and removes common SQL injection patterns.
- **Example:** `1 OR 1=1` → `""`

### 3. Bad Words Filter (`enableBadWordsFilter`)
Censors inappropriate words with `***`.
- **Example:** `shit` → `***`

### 4. Emoji / Suspicious Unicode Filter (`enableEmojisFilter`)
Removes emoji and suspicious Unicode characters.
- **Example:** `hello 😊` → `hello`

### 5. Multilanguage Support (`enableMultilangSupport`)
Allows Persian, Russian, and Chinese characters alongside English.

### 6. Custom Character Filtering (`enableCharFilter`)
Filters input based on the specified `data-secure-type` and allowed characters.

---

## 🎯 Usage

```html
<input data-secure-type="string" data-allow="." maxlength="50" data-badwords="foo,bar" />
```

### Supported `data-secure-type` values
| Type        | Description                           |
|-------------|---------------------------------------|
| `string`    | Only letters (Persian/English)        |
| `number`    | Only digits                           |
| `mixed`     | Letters + numbers                     |
| `persian`   | Only Persian letters                  |
| `english`   | Only English letters                  |
| `username`  | Letters + numbers + `_`               |
| `password`  | Letters + numbers + special symbols   |
| `email`     | Email format                          |
| `slug`      | Lowercase letters + `-` and `_`       |
| `phone`     | Digits and `+`                        |
| `date`      | Digits + `/` or `-`                   |
| `no-space`  | No whitespace allowed                 |

### Additional Attributes
- `data-allow`: Add extra allowed characters.
- `data-allow-copy="false"`: Disable copy/cut.
- `data-allow-paste="false"`: Disable paste.
- `data-enable-*`: Enable/disable specific filters per input.

---

## ✅ Example

```html
<input 
  type="text" 
  data-secure-type="username" 
  data-allow="_." 
  data-badwords="admin,root" 
  data-allow-copy="false" 
  data-allow-paste="false"
  maxlength="20"
/>
```

## 🛠️ Debug Mode
If `enableDebug` is enabled, all cleaned input logs will be shown in the console.

---

## 📁 How to Use
```html
<script src="secure-input.js"></script>
```

---

## 🤝 Contributions
Pull requests are welcome — keep the code clean.

---

## License
MIT
