/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'mobile': {'min': '230px', 'max': '480px'},
      'tablet': {'min': '481px', 'max': '800px'},
      'laptop': {'min': '801px', 'max': '1024px'},
      'desktop': {'min': '1025px'},
    },
    // fontSize: {
    //   'mobile': '.75rem',
    //   'tablet': '.875rem',
    //   'laptop': '1rem',
    //   'desktop': '1.25rem',
    // },
    extend: {
      backgroundImage:{
        'bg-light':"url('/src/image_video/images/light1.jpg')",
        'bg-dark':"url('/src/image_video/images/dark1.jpg')",
      }
    },
  },
  plugins: [],
}
