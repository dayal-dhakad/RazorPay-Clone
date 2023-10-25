/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      height: {
        '140': '40rem',
        '120': '30rem',
        '125': '25rem',
        '135': '35rem',
        '160' : '6rem',
      },
      width:{
        '140': '46rem',
        '120': '40rem',
        '130': '30rem',
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      fontFamily: {
        mullish: ["Mullish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
