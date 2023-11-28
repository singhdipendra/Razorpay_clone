/**@type {import('tailwindcss').config} */
module.exports = {
  content : ["*"],
  theme: {
    extend:{
      fontFamily:{
        mullish: ["Mulish","sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500:"#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGrey: "#e2e2e2",
        greyBlue: "#344a6c",
        deepBlueHead: "#162f56",
        grey2: "#525a76",
        lightGray:"#F7FAFC",
        darkBlue:"#181c2e",
      },
    },
  },
  plugins:[], 
}