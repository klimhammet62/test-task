const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const primary = '#5d8ab5'

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      gray: {
        50:
          '#f9fafb',
        100:
          '#f3f4f6',
        200:
          '#e5e7eb',
        300:
          '#BDBDBD',
        400:
          '#9ca3af',
        500:
          '#6b7280',
        600:
          '#4b5563',
        700:
          '#374151',
        800:
          '#1f2937',
        900:
          '#111827'
      },
      orange: {
        300: '#FFA500'
      },
      red: {
        100: '#FEF2F2',
        200: '#FEE2F2',
        300: '#FED2F2',
        400: '#FECACA',
        500: '#FCA5A5',
        600: '#EF4444',
        700: '#DC2626'
      }
    },
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: primary,
          color: '#fff',
          borderRadius: '0.65rem',
          transition: 'background-color .3s ease-in-out',
          '&:hover': {
            backgroundColor: '#6d8ea8',
            color: '#fff9'
          }
        }
      },
        addUtilities({
          '.flex-center-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },

          '.image-like-bg': {
            objectPosition: 'center',
            objectFit: 'cover',
            pointerEvents: 'none'
          }
        })
      )
    })
  ],
}
