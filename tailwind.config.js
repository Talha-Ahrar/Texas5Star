/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#002B5C', // Deep Navy from your image
        'brand-red': '#D32F2F',  // The star red
        'nav-gray': '#F5F5F5'   // The light gray nav background
      }
    },
  },
  plugins: [],
}
