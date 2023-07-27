// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'inc-color':'#3CCF4E',
        'exp-color':'#FF1E00',
      }
    },
  },
  plugins: [require("daisyui")],
}

