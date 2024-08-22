/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js',
    './components/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Bangers': ['Bangers', 'sans-serif']
      },
      letterSpacing: {
        'custom': '0.2em', // Add your custom letter spacing value
      }
    },
  },
  plugins: [],
}
