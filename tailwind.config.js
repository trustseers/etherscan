/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite/**/*.js',
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:
        {
          'footer_bg': "url('/src/assets/images/abstract-shapes-20.svg')",
          'footer_map': "url('/src/assets/images/world-map-white.png')",
        }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  typeRoots: [
    "../node_modules/@types",
    "../@types"
  ],
}
