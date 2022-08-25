module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
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
    colors:{
      'main-bg':'#F0F0F0',
      'main-orange':'#E6553B'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}