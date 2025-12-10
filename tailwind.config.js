/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        'aqua': '#00FFFF',
        'turquoise': '#40E0D0',
        'dark-gray': '#1a1a1a',
        'darker-gray': '#0f0f0f',
      },
    },
  },
  plugins: [],
}
