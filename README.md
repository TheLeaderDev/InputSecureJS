
<h2 dir="ltr">InputSecureJS</h2>

[![SecureInputs Preview](http://amir8218.ir/GitHub/InputSecureJS/images/img.png)](https://github.com/Amir-Hosein-Amiri/InputSecureJS)
---

<h2 dir="ltr">About</h2>

InputSecureJS is a lightweight JavaScript utility that sanitizes and filters form inputs in real-time.
This tool was created to help developers protect their input fields against common threats like SQL Injection, XSS, emoji spam, bad words, and character set mismatches — especially in multilingual web projects.

<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>

InputSecureJS یک ابزار سبک جاوااسکریپتی است که به‌صورت لحظه‌ای ورودی‌های فرم را پاک‌سازی و فیلتر می‌کند.
این ابزار برای کمک به توسعه‌دهندگان طراحی شده تا از فیلدهای ورودی در برابر تهدیدهای رایجی مانند تزریق SQL، حملات XSS، اسپم ایموجی، کلمات نامناسب و ناسازگاری کاراکترها — به‌ویژه در پروژه‌های چندزبانه — محافظت کنند.
</details>

---
<h2 dir="ltr">Features</h2>

- Free and open-source
- Filters: XSS, SQL injection, emojis, and inappropriate words
- Automatically removes suspicious or dangerous Unicode characters
- Supports Persian, English, and multilingual inputs
- Configurable per field using HTML attributes
- Allows defining allowed input types (letters, numbers, mixed, no spaces, etc.)
- Allows adding extra permitted characters
- Allows setting maximum input length
- Option to disable paste and copy individually
- Each filter can be enabled or disabled globally or per field
- Debug mode to inspect input changes
- Easy to install with a single file
- Lightweight, fast, and dependency-free



<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>

- رایگان و متن‌باز
- فیلتر کردن: XSS، تزریق SQL، ایموجی، کلمات نامناسب
- حذف خودکار کاراکترهای مشکوک یا خطرناک یونیکد
- پشتیبانی از فارسی، انگلیسی و زبان‌های چندگانه
- تنظیم‌پذیر برای هر فیلد با استفاده از اتریبیوت‌های HTML
- امکان تعیین نوع ورودی مجاز (حروف، اعداد، ترکیبی، بدون فاصله و...)
- امکان تنظیم حروف یا کاراکترهای مجاز اضافه
- امکان تنظیم حداکثر تعداد کاراکتر ورودی
- امکان غیرفعال‌سازی paste و copy به‌صورت جداگانه
- امکان فعال یا غیرفعال‌سازی هر فیلتر به‌صورت سراسری یا در سطح هر فیلد
- حالت Debug برای بررسی تغییرات ورودی‌ها
- نصب آسان تنها با یک فایل
- سبک، سریع و بدون وابستگی
</details>

---
<h2 dir="ltr">How to Use</h2>

### ○ Include in your HTML:
```html
<script src="assets/scripts/secure.js" defer></script>
```

Add input field with:
```html
<input type="text" data-secure-type="string" maxlength="30" placeholder="Type letters only" />
```

Supported types:
- `string`, `number`, `mixed`, `persian`, `english`, `username`, `password`, `email`, `slug`, `phone`, `date`, `no-space`

You can also configure each input with attributes:
- `data-allow`, `data-badwords`, `data-allow-copy`, `data-allow-paste`
- `data-enable-xss-filter`, `data-enable-sql-filter`, `data-enable-badwords-filter`, etc.

<a href="https://github.com/Amir-Hosein-Amiri/InputSecureJS/blob/main/help.md" target="_blank">Complete Project Usage Guide</a>


<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>

### ○ افزودن به HTML:
```html
<script src="assets/scripts/secure.js" defer></script>
```

افزودن ورودی:
```html
<input type="text" data-secure-type="string" maxlength="30" placeholder="فقط حروف مجاز" />
```

نوع‌های قابل پشتیبانی:
- `string`, `number`, `mixed`, `persian`, `english`, `username`, `password`, `email`, `slug`, `phone`, `date`, `no-space`

اتریبیوت‌های قابل پشتیبانی:
- `data-allow`, `data-badwords`, `data-allow-copy`, `data-allow-paste`
- `data-enable-xss-filter`, `data-enable-sql-filter`, `data-enable-badwords-filter`, و غیره

<a href="https://github.com/Amir-Hosein-Amiri/InputSecureJS/blob/main/help.md" target="_blank">راهنمای کامل استفاده از پروژه</a>

</details>

---
<h2 dir="ltr">Demo Page</h2>

Test page is available at:  
<a href="https://inputsecurejs.vercel.app/" target="_blank">Live Demo</a>

---
<h2 dir="ltr">Future Plans</h2>

If supported with a ⭐, we will add the following features in future versions:

- 🌍 A powerful API for automatic filtering of inappropriate words in multiple languages
- 🧠 Smarter algorithms to detect and remove offensive words and harmful emojis
- 👁️ Enhanced accuracy of security filters and monitoring suspicious behaviors
- 🔐 Increased project security against hacker tampering





<details dir="rtl">
<summary>فارسی (کلیک برای باز کردن)</summary> <br>
اگر حمایت شود ⭐، در نسخه‌های آینده این ویژگی‌ها را اضافه می‌کنیم:

- 🌍 API قدرتمند برای فیلتر خودکار کلمات نامناسب به چند زبان مختلف
- 🧠 الگوریتم هوشمندتر برای تشخیص و حذف فحش و ایموجی‌های مخرب
- 👁️ افزایش دقت فیلتر امنیتی و بررسی رفتارهای مشکوک
- 🔐 افزایش امنیت بیشتر پروژه در مقابل دستکاری هکرها
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


