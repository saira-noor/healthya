/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      colors: {
        paleBlush: '#C9FFC9',
        accentRed: '#FD4D21',
        offWhite: '#FBFBFB',
        softGrey: '#F8F8F8',
        lightGrey: '#F3F3F3',
        textGrey: '#B4A8A8',
        medGrey: '#888888',
        darkGrey: '#2E2E2E',
        veryDarkGrey: '##252525',
        blackGrey: '#1E1E1E',
        offBlack: '#0F0F0F',
        borders: '#DADADA',
        greyBorder: '#898989',
        lightBorderGrey: '#D2D2D2',
        placeholderGrey: '#858585',
        menuHighlight: 'rgba(167, 232, 232, 0.1)',
        menuBorder: '#A7E8E8',
        blueLink: '#00A3A3',
        services: '#F7F7F7',
        mobileBorder: '#D0D0D0',
        blueT: 'rgba(0, 163, 163, 0.4)',
        greenT:'rgba(0, 128, 0, 0.4)',
        customBlue: '#0F759D',
      }
    },
  },
  plugins: [],
}

