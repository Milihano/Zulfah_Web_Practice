/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":['Poppins', 'sans-serif' ]
      },
      screens:{
        lg: { min:"801px", max:"1115px" },

        md:  { min:"415px", max: "800px" },

        sm: {max:"414px"}
      },
      // backgroundImage:{
      //   'back': "url('/Components/Images/contact-vector.png')"
      // }
    },
  },
  plugins: [],
}