module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: { keyframes: {
      slideInLeft: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
    },
    animation: {
      slideInLeft: 'slideInLeft 0.5s ease-out forwards',
    },
  },
  },
  plugins: [],
};