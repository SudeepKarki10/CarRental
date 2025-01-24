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
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-in-out',
        'slide-in-right': 'slide-in-right 1s ease-in-out',
        'hero-animation': 'hero-animation 2s ease-in-out', // Added animation for Hero component
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'hero-animation': {
          '0%, 100%': {opacity: 0},
          '25%': {opacity: 1, transform: 'translateX(-100%)'},
          '50%': {opacity: 1, transform: 'translateX(0)'},
          '75%': {opacity: 1, transform: 'translateX(100%)'},
        }
      }
    },
  },
  plugins: [],
};
