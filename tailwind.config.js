/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        darkNavyGrey: "#404258",
        lightGrey: "#6B728E",
        lightNavyGrey: "#474E68",
        navyGreyPurple: "#50577A",
        lightPurple: "#9F73AB",
        lightYellow: "#F2F7A1"
      }
    },
  },
  plugins: [],
}
