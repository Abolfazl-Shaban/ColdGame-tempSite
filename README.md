# کولدگیم - ColdGame Website

یک وب‌سایت مدرن و ریسپانسیو برای سرور بازی کولدگیم که با Next.js 14 و TailwindCSS ساخته شده است.

## ویژگی‌ها

- ✅ طراحی کاملاً ریسپانسیو برای موبایل و دسکتاپ
- ✅ استفاده از فونت Vazirmatn برای متن‌های فارسی
- ✅ تم تاریک مدرن با رنگ‌های آکوا و تورکویز
- ✅ قابلیت کپی کردن IP سرور با یک کلیک
- ✅ دکمه‌های شبکه‌های اجتماعی با افکت‌های hover
- ✅ بهینه‌سازی SEO با metadata کامل
- ✅ استفاده از semantic HTML tags
- ✅ پشتیبانی کامل از RTL (راست به چپ)

## نصب و راه‌اندازی

1. وابستگی‌ها را نصب کنید:
```bash
npm install
```

2. سرور توسعه را اجرا کنید:
```bash
npm run dev
```

3. مرورگر را باز کنید و به آدرس `http://localhost:3000` بروید.

## ساخت پروژه

برای ساخت نسخه production:

```bash
npm run build
npm start
```

## تکنولوژی‌های استفاده شده

- **Next.js 14** - فریمورک React با App Router
- **TailwindCSS** - فریمورک CSS utility-first
- **TypeScript** - زبان برنامه‌نویسی type-safe
- **Vazirmatn Font** - فونت فارسی بهینه

## ساختار پروژه

```
app/
├── globals.css          # استایل‌های全局
├── layout.tsx          # Layout اصلی با metadata
├── page.tsx            # صفحه اصلی (redirect به /server)
└── server/
    └── page.tsx        # صفحه اصلی سرور
```

## سفارشی‌سازی

- برای تغییر IP سرور، فایل `app/server/page.tsx` را ویرایش کنید
- برای تغییر رنگ‌ها، فایل `tailwind.config.js` را ویرایش کنید
- برای تغییر متن‌ها، فایل `app/server/page.tsx` را ویرایش کنید
"# ColdGame-tempSite" 
