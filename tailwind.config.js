/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf7f4',
          100: '#f5ece9',
          200: '#ead6dc',
          300: '#d8b2bf',
          400: '#b9809a',
          500: '#9a4f74',
          600: '#82355d',
          700: '#6b2049',
          800: '#521238',
          900: '#3b0826',
          950: '#26051a',
        },
        ink: { DEFAULT: '#26051a', soft: '#3b0826', mute: '#7d6670' },
        blush: { light: '#f6e6df', DEFAULT: '#e9c9bb', dark: '#b88472' },
        champagne: { DEFAULT: '#C6A15B', light: '#F0E3C8', dark: '#97732F' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
