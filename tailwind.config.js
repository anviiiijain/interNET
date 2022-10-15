/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        34: "8.5rem",
      },
      height: {
        34: "8.5rem",
      },
      borderRadius: {
        card: "0.8rem",
      },
      borderWidth: {
        3: "2.5px",
      },
      colors: {
        primary: "#427FFE",
        "primary-dark": "#1e5de6",
        background: "#F7F7F7",
        secondary: "#1a202c",
        text: {
          light: "#bababb",
          DEFAULT: "#303030",
        },
        "light-gray": "#9D9A9A",
        table: "#707070",
        success: "#00ff65",
      },
    },
  },
  plugins: [],
};
