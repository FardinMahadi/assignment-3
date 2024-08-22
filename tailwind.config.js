/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      "builder-primary": "#f7f7f7",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
