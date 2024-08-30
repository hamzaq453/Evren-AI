/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(230,214,250,1) 0%, rgba(153,132,212,1) 59%)',
      },
      screens: {
        prolarge: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        maxlarge: { max: "1200px" },
        // => @media (max-width: 1279px) { ... }
        inc: { max: "1023px" },
        large: { max: "960px" },
        // => @media (max-width: 1023px) { ... }

        middle: { max: "600px" },
        // => @media (max-width: 767px) { ... }

        small: { max: "400px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(230,214,250,1) 0%, rgba(153,132,212,1) 59%);",
      },
      boxShadow: {
        "custom-inset":
          "inset -5px -5px 10px 0px rgba(255, 255, 255, 0.5), inset 5px 5px 10px 0px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        ternary: "var(--ternary-color)",
        brandclr: "var(--brandclr-color)",
        'custom-purple': 'rgb(230,214,250)',
      },
    },
    keyframes: {
      upAndDown: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
    animation: {
      upAndDown: "upAndDown 2s ease-in-out infinite",
    },
  },
  plugins: [],
};

