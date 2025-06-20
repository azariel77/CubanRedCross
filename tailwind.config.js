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
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-align-last-justify': {
          'text-align-last': 'justify',
          '-webkit-text-align-last': 'justify',
          '-moz-text-align-last': 'justify',
          'text-justify': 'inter-word',
          '-webkit-text-justify': 'inter-word',
          '-moz-text-justify': 'inter-word'
        },
        '.hyphens-auto': {
          'hyphens': 'auto',
          '-webkit-hyphens': 'auto',
          '-ms-hyphens': 'auto'
        }
      }
      addUtilities(newUtilities)
    }
  ],
};