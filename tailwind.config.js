/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  screens: {
    md: { max: '768px' },
  },
  theme: {
    extend: {
      backgroundImage: {
        footerBg: "url('/src/assets/images/abstract-shapes-20.svg')",
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    // require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  typeRoots: ['../node_modules/@types', '../@types'],
  darkMode: 'class',
  variants: {
    display: ['group-hover'],
  },
};
