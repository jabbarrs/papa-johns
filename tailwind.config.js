module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '340px',
        'custom': {'min': '340px', 'max': '640px'},
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}