const plugin = require('@tailwindcss/forms')

module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontFamily:{
      'squada': ['Squada One', 'cursive','Noto Sans TC', 'sans-serif'],
      'number':['Paytone One', 'sans-serif']
    },
    container:{
      center:true,
      padding:'12px',
      screens:{
        '2xl':'1440px'
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundImage:{
        'art-4':"url('/assets/images/week8-202207/art04.jpg')"
      },
      colors:{
      'main-bg':'#F0F0F0',
      'main-orange':'#E6553B'
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // plugin(function({ addUtilities, addComponents, e, prefix, config }) {
    //   const newUtilities = {
    //     '.horizontal-tb': {
    //       writingMode: 'horizontal-tb',
    //     },
    //     '.vertical-rl': {
    //       writingMode: 'vertical-rl'
    //     },
    //     '.vertical-lr': {
    //       writingMode: 'vertical-lr'
    //     }
    //   }
    //   addUtilities(newUtilities)
    // })
  ],
}