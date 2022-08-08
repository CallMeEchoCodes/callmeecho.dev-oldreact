/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.{html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        isabelline: {
          50: '#fefefe',
          100: '#fefdfc',
          200: '#fcfaf8',
          300: '#faf6f4',
          400: '#f6f0ec',
          500: '#f2e9e4',
          600: '#dad2cd',
          700: '#b6afab',
          800: '#918c89',
          900: '#777270'
        },
        'silver-pink': {
          50: '#fcfbfb',
          100: '#faf7f6',
          200: '#f2ebe9',
          300: '#e9dedc',
          400: '#d9c6c1',
          500: '#c9ada7',
          600: '#b59c96',
          700: '#97827d',
          800: '#796864',
          900: '#625552'
        },
        'heliotrope-gray': {
          50: '#faf9fa',
          100: '#f5f4f5',
          200: '#e6e2e5',
          300: '#d7d1d6',
          400: '#b8afb7',
          500: '#9a8c98',
          600: '#8b7e89',
          700: '#746972',
          800: '#5c545b',
          900: '#4b454a'
        },
        independence: {
          50: '#f6f6f8',
          100: '#ededf0',
          200: '#d2d3da',
          300: '#b7b8c3',
          400: '#808396',
          500: '#4a4e69',
          600: '#43465f',
          700: '#383b4f',
          800: '#2c2f3f',
          900: '#242633'
        },
        'space-cadet': {
          50: '#f4f4f5',
          100: '#e9e9eb',
          200: '#c8c8ce',
          300: '#a7a7b1',
          400: '#646476',
          500: '#22223b',
          600: '#1f1f35',
          700: '#1a1a2c',
          800: '#141423',
          900: '#11111d'
        }
      }
    }
  },
  plugins: [require('daisyui')]
}
