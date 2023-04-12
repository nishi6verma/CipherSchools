/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#f3912e",
          text: "#2c3d4f",
          body: "#F2F5FA",
        },
        fontFamily: {
          openSans: ["Open Sans", "sans-serif"],
        },
        screens: {
          sm: "576px",
          // => @media (min-width: 640px) { ... }
  
          md: "768px",
          // => @media (min-width: 768px) { ... }
  
          lg: "1024px",
          // => @media (min-width: 1024px) { ... }
        },
      },
    },
    plugins: [],
  };