/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // sau doar ./src/**/* dacă nu folosești JSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
