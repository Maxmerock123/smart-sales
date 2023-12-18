/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':"Kanit"
      },
      colors: {
        'custom-yellow': '#CFC1A0',
        'custom-brown': '#7E5832',
        'custom-orange': '#BE925A'
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}