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
        'custom-gradient': 'radial-gradient(circle, rgba(106,109,230,1) 45%, rgba(255,253,253,1) 100%)',
      },
      boxShadow: {
        'custom-inset': 'inset -5px -5px 10px 0px rgba(255, 255, 255, 0.5), inset 5px 5px 10px 0px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: 'var(--primary-color)',
      },
    },
    keyframes: {
      upAndDown: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
    animation: {
      upAndDown: 'upAndDown 2s ease-in-out infinite',
    },

  },
  plugins: [],
};
