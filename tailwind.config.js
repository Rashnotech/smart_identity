/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      titleblue: "#051B47",
      primary: "#FF743D",
      secondary: "#008287",
    },
    fontFamily: {
      GoshaSans: ["GoshaSans", "sans-serif"],
      Roboto: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
