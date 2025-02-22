/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}', 
    './components/**/*.{js,ts,tsx}', 
    './screens/**/*.{js,ts,tsx}'  
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        customBlue: '#547B9D',
        darkBlue: '#003A6C'
      }
    },
  },
  plugins: [],
};
