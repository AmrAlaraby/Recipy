/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان الأساسية
        primary: {
          DEFAULT: '#2A2D3E', // اللون الرئيسي للنافبار
          dark: '#212432', // للhover effects
        },
        secondary: '#FF9F29', // اللون البرتقالي المميز
        background: '#F5F5F5', // لون خلفية الصفحة
        surface: '#FFFFFF', // لون الخلفية للبطاقات والأسطح
        text: {
          primary: '#2A2D3E', // للنصوص الرئيسية
          secondary: '#6B7280', // للنصوص الثانوية
          accent: '#FF9F29', // للنصوص المميزة
        },
        // ألوان إضافية
        success: '#10B981', // أخضر للنجاح
        warning: '#F59E0B', // أصفر للتحذير
        error: '#EF4444', // أحمر للأخطاء
      },
    },
  },
  plugins: [],
}

