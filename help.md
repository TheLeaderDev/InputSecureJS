
#  Full Tutorial and Usage Guide for InputSecureJS 📃

On this page, you’ll learn exactly how the InputSecureJS script works.
All its settings and options are explained with examples, so you can easily use this script in your HTML projects.

You can test all features live through the link below :
<a href="https://github.com/Amir-Hosein-Amiri/InputSecureJS/blob/main/help.md" target="_blank">Online Demo and Customization</a>

Additionally, graphical customization and exporting of the global configuration settings are available.
⭐ With your support, a more advanced graphical customization section will be added in the future.

Now, let’s go through the detailed explanations of the script step-by-step and section-by-section :

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">آموزش کامل و راهنمای استفاده از InputSecureJS 📃</h2>

در این صفحه، دقیقاً خواهید آموخت که اسکریپت InputSecureJS چگونه کار می‌کند.
تمام تنظیمات و گزینه‌های آن همراه با مثال توضیح داده شده‌اند تا بتوانید به‌راحتی این اسکریپت را در پروژه‌های HTML خود استفاده کنید.

می‌توانید تمامی قابلیت‌ها را به‌صورت زنده از طریق لینک زیر تست کنید:
<a href="https://github.com/Amir-Hosein-Amiri/InputSecureJS/blob/main/help.md" target="_blank">دمو و شخصی‌سازی آنلاین</a>

علاوه بر این، امکان سفارشی‌سازی گرافیکی و دریافت خروجی تنظیمات کلی (کانفیگ سراسری) فراهم شده است.
⭐ با حمایت شما، بخش سفارشی‌سازی گرافیکی پیشرفته‌تر در آینده اضافه خواهد شد.

حالا قدم‌به‌قدم و بخش‌به‌بخش، توضیحات دقیق اسکریپت را مرور می‌کنیم:



</details>

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

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">1. پیکربندی کلی</h2>

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

| گزینه تنظیمات               | توضیحات                                                                 | مقدار پیش‌فرض | نکات                                                                 |
|----------------------------|------------------------------------------------------------------------|----------------|----------------------------------------------------------------------|
| `enableDebug`             | فعال‌سازی لاگ‌گیری دیباگ در کنسول                                     | false          | اگر `true` باشد، تمام تغییرات ورودی در کنسول لاگ می‌شوند            |
| `enableSQLInjectionFilter`| فعال‌سازی حذف الگوهای تزریق SQL                                       | true           | از حملات رایج SQL Injection جلوگیری می‌کند                         |
| `enableMultilangSupport`  | اجازه‌ی ورود چندزبانه (مثلاً فارسی، روسی، چینی)                      | true           | اگر `false` باشد، فقط کاراکترهای محدودی مجاز هستند                 |
| `enableEmojisFilter`      | فیلتر کردن ایموجی‌ها و نویسه‌های مشکوک یونی‌کد                        | true           | ایموجی‌ها و نویسه‌های عجیب را حذف می‌کند                            |
| `enableXSSFilter`         | حذف تگ‌ها و اسکریپت‌های HTML                                           | true           | تگ‌های خطرناک مثل `<script>`، `<iframe>` و... را حذف می‌کند         |
| `enableBadWordsFilter`    | فیلتر کردن کلمات نامناسب تعریف‌شده و جایگزینی با `***`               | true           | از ویژگی `data-badwords` استفاده می‌کند                             |
| `enableCharFilter`        | فیلتر کردن کاراکترهای نامعتبر بر اساس نوع امن و الگو                  | true           | کنترل سخت‌گیرانه‌ی کاراکترها                                        |

</details>

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

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">2. ویژگی‌های ورودی</h2>


| ویژگی (Attribute)             | نوع (Type) | توضیحات                                                                            | مقدار نمونه                            |
|------------------------------|------------|-------------------------------------------------------------------------------------|----------------------------------------|
| `data-secure-type`           | String     | نوع داده ورودی برای اعمال منطق regex و فیلتر                                      | `string`، `number`، `email` و...       |
| `data-allow`                 | String     | کاراکترهای مجاز اضافی در ورودی                                                    | `"@_-."`                               |
| `maxlength`                  | Number     | حداکثر طول مجاز برای ورودی                                                        | `50`، `100`                            |
| `data-badwords`              | String     | لیست کاما جدا از کلمات نامناسب برای فیلتر                                         | `"foo,bar,badword"`                    |
| `data-allow-copy`            | Boolean    | کنترل اجازه کپی/برش                                                               | `"true"` یا `"false"`                  |
| `data-allow-paste`           | Boolean    | کنترل اجازه چسباندن (Paste)                                                       | `"true"` یا `"false"`                  |
| `data-enable-xss-filter`     | Boolean    | فعال/غیرفعال‌سازی فیلتر XSS برای این ورودی (جایگزین تنظیم کلی)                   | `"true"` یا `"false"`                  |
| `data-enable-emojis-filter`  | Boolean    | فعال/غیرفعال‌سازی فیلتر ایموجی برای این ورودی                                    | `"true"` یا `"false"`                  |
| `data-enable-badwords-filter`| Boolean    | فعال/غیرفعال‌سازی فیلتر کلمات نامناسب                                            | `"true"` یا `"false"`                  |
| `data-enable-sql-filter`     | Boolean    | فعال/غیرفعال‌سازی فیلتر SQL Injection                                            | `"true"` یا `"false"`                  |
| `data-enable-multilang`      | Boolean    | فعال/غیرفعال‌سازی پشتیبانی چندزبانه                                              | `"true"` یا `"false"`                  |
| `data-enable-char-filter`    | Boolean    | فعال/غیرفعال‌سازی منطق لیست سفید کاراکترها                                        | `"true"` یا `"false"`                  |


</details>

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

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">3. مقادیر data-secure-type و قواعد مجاز کاراکترها</h2>

| مقدار (Value)  | توضیحات                                      | کاراکترهای مجاز (Regex)                                      | نکات                                      |
|----------------|-----------------------------------------------|---------------------------------------------------------------|-------------------------------------------|
| `string`       | فقط حروف (هر زبان مجاز)                      | حروف انگلیسی + زبان‌های فعال‌شده + کاراکترهای مجاز           | کاراکترهای غیرحرفی فیلتر می‌شوند         |
| `number`       | فقط اعداد                                     | `0-9` + کاراکترهای مجاز                                       | فقط ارقام مجاز هستند                     |
| `mixed`        | حروف + اعداد                                  | حروف + ارقام + کاراکترهای مجاز                               | هر چیزی به جز الگوهای مسدود شده پذیرفته می‌شود |
| `persian`      | فقط حروف فارسی                                | کاراکترهای فارسی + کاراکترهای مجاز                           | حروف انگلیسی مجاز نیستند                |
| `english`      | فقط حروف انگلیسی                              | a-z, A-Z + کاراکترهای مجاز                                   | فقط انگلیسی                              |
| `username`     | حروف + اعداد + آندرلاین                      | a-z, A-Z, 0-9, `_`, کاراکترهای مجاز                          | مناسب برای نام کاربری                    |
| `password`     | تمام نمادها                                   | حروف، اعداد و کاراکترهای خاص                                 | نمادهایی مانند `@!#$` را می‌پذیرد        |
| `email`        | بخش‌های معتبر ایمیل                           | a-z, A-Z, 0-9, @, ., _, -, +, کاراکترهای مجاز                | الگوی ساده‌شده ایمیل                    |
| `slug`         | مناسب برای URL/نامک                          | حروف کوچک، اعداد، `_`، `-`                                   | مناسب برای آدرس و پیوند یکتا             |
| `phone`        | فرمت شماره تلفن                               | اعداد + `+` + کاراکترهای مجاز                                | پشتیبانی از فرمت بین‌المللی             |
| `date`         | فرمت تاریخ                                    | ارقام + `/` و `-` + کاراکترهای مجاز                          | برای `YYYY-MM-DD` و مشابه آن             |
| `no-space`     | بدون فاصله                                    | کاراکترهای مجاز بدون فاصله                                   | فاصله‌ها حذف می‌شوند                     |
| `default`      | الگوی پیش‌فرض                                | حروف، اعداد، زبان‌ها و کاراکترهای مجاز                       | الگوی پیش‌فرض                            |


</details>

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

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">4. نحوه عملکرد فیلتر روی ورودی</h2>

1. وقتی کاربر ورودی را تایپ می‌کند یا تغییر می‌دهد، فیلترها به ترتیب زیر اعمال می‌شوند:
2. حذف تگ‌های HTML خطرناک (فیلتر XSS)
2. فیلتر کردن کاراکترها بر اساس `data-secure-type`
3. محدود کردن طول ورودی به `maxlength`
4. حذف ایموجی‌ها و نویسه‌های عجیب یونی‌کد
5. حذف الگوهای تزریق SQL
6. جایگزینی کلمات نامناسب با `***`
7. ثبت تغییرات در کنسول در صورتی که `enableDebug` فعال باشد


</details>

---

## 5. Copy & Paste Behavior

| Attribute          | Description                             | Default | Example |
|-------------------|-----------------------------------------|---------|---------|
| `data-allow-copy` | Allow cut/copy in input                 | `true`  | `false` |
| `data-allow-paste`| Allow paste in input                    | `true`  | `false` |

If set to `"false"`, copy/cut/paste actions will be blocked via event handling.

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">5. نحوه عملکرد کپی و پیست</h2>

| ویژگی (Attribute)     | توضیح                                   | مقدار پیش‌فرض | مثال     |
|----------------------|----------------------------------------|---------------|----------|
| `data-allow-copy`     | اجازه کپی/برش در ورودی                 | `true`        | `false`  |
| `data-allow-paste`    | اجازه چسباندن (Paste) در ورودی         | `true`        | `false`  |

اگر مقدار روی `"false"` تنظیم شود، عملیات کپی/برش/چسباندن با استفاده از مدیریت رویدادها مسدود خواهد شد.


</details>

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

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
  
<h2 dir="rtl">6. مثال نهایی در HTML</h2>

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

- فقط اجازه استفاده از حروف، اعداد، `_` و `-` را می‌دهد
- کلمات `badword1` و `badword2` فیلتر می‌شوند
- کپی و برش غیرفعال است، چسباندن فعال است
- فیلتر XSS فعال است، فیلتر SQL غیرفعال است

</details>

---
<h2 dir="ltr">Support</h2>

If you find InputSecureJS useful, please star ⭐ the repository and share it.  
Your support motivates future improvements.

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>

اگر InputSecureJSبراتون مفید بود لطفاً به پروژه ⭐ بدید و آن را به اشتراک بگذارید.  
حمایت شما باعث دلگرمی ماست.
</details>

---
<h2 dir="ltr">Contact</h2>

 <p dir="auto">
    <a href="https://wa.me/+989201342023" rel="nofollow"><img src="https://img.shields.io/badge/WhatsApp-url?style=for-the-badge&logo=WhatsApp&logoColor=%2325D366&color=%23082032" alt="WhatsApp" style="max-width: 100%;"></a>
    <a href="https://www.instagram.com/amir._.ea_" rel="nofollow"><img src="https://img.shields.io/badge/instagram-%23082032?style=for-the-badge&logo=instagram&logoColor=%23FD0AB6&color=%23082032" alt="Instagram" style="max-width: 100%;"></a>
    <a href="https://t.me/Ami_ea" rel="nofollow"><img src="https://img.shields.io/badge/telegram-url?style=for-the-badge&logo=telegram&logoColor=%232CA5E0&color=%23082032" alt="telegram" style="max-width: 100%;"></a>
        <a href="https://www.linkedin.com/in/amir-hosein-amiri" rel="nofollow"><img src="https://amir8218.ir/GitHub/Logo/Profiles/LINKEDIN%20.svg" alt="lLnkedin" style="max-width: 100%;"></a>

