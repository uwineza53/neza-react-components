/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[500] },
        secondary: { ...colors.green, DEFAULT: colors.green[500] },
        neutral: { ...colors.gray, DEFAULT: colors.gray[500] },
        issue: { ...colors.red, DEFAULT: colors.red[500] }
      },
      animation: {
        "slide-in": 'slide-in .1s ease-in forwards',
      },
      keyframes: {
        'slide-in': {
          '100%': { right: '1.5%' },
        }
      }
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      // colord = theme('colors');

      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][500];
          const color2 = colors[color][600];

          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 10px ${color1}, 0 0 5px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    })
  ],
}

