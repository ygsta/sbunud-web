module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "wie-color": "#FF0089",
        "primary-color": "#112240"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
