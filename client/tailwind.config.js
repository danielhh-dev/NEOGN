/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      'general-sans': ['"General Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

