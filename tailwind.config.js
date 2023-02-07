/** @type {import('tailwindcss').Config} */


const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#334680",
          medium: "#1E86FF",
          dark: "#282538",
        },
        grey: {
          background: "#F6F7FB",
          "extra-light": "#f2f2f2",
          light: "#B9BDCF",
          medium: "#BdBDbD",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        default: "0px 2px 4px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

module.exports = config;
