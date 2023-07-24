/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appPurple: 'hsl(259, 100%, 65%)',
        appLightRed: 'hsl(0, 100%, 67%)',
        appOffWhite: 'hsl(0, 0%, 94%)',
        appLightGrey: 'hsl(0, 0%, 86%)',
        appSmokeyGrey: 'hsl(0, 1%, 44%)',
        appOffBlack: 'hsl(0, 0%, 8%)'
      },
      borderRadius: {
        Spxl: '170px'
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      letterSpacing: {
        appSpacing: ".15em"
      }
    }
  },
  plugins: []
}
