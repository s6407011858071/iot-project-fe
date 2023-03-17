/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#016585",
        secondary: "#3BFCCD",
      },
      backgroundColor: {
        secondary: "#F2F6FF",
        secondary2: "#3BFCCD",
        danger: "#FC3B3B",
      },
    },
  },
  plugins: [],
};
