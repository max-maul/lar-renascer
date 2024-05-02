/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#FFA4A4",
        "custom-dark-pink": "#BA1971",
        "custom-dark-yellow": "#B7932D"
      }
    },
  },
  plugins: [],
}