/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "450px",
        ssm: "630px", // Custom extra small screen
        md: "830px", // Medium screen
        lg: "1000px", // Large screen
        xl: "1280px", // Extra large screen
        xxl: "1536px", // 2x large screen
      },
    },
  },
  plugins: [],
};
