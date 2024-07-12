/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      backgroundImage:{
      "home": "url('/assets/home_img.jpg')"
    }},
  },
  plugins: [],
}