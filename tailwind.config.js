/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
        {
          'footer_bg': "url('/src/assets/images/abstract-shapes-20.svg')",
          'footer_map': "url('/src/assets/images/world-map-white.png') no-repeat 0 30%;",
        }
    }
  },
  plugins: [],
  typeRoots: [
    "../node_modules/@types",
    "../@types"
  ],
}
