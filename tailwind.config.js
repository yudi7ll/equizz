/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'Helvetica Neue',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
        logo: ['Anton', 'sans-serfi'],
      },
    },
  },
  plugins: [],
}
