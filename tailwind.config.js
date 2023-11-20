
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'min-sm':{min: '700px'},
        'min-md':{min: '900px'},
        'min-lg':{min : '1100px'},
        'max-xl':{ max: '1920px'},
      },
      colors: {
        primary:{
          "50":  "#B0B3B8",
          "100": "#525758",
          "200": "#4E4F50",
          "300": "#4D4E4F",
          "400": "#3E4042",
          "500": "#3A3B3C",
          "600": "#242526",
          "700": "#18191A",

        },
        secondary:{
          "50":"#E7F3FF",
          "100":"#E4E6EB",
          "200":  "#7B7B7B",
          "300" : '#424242',
          "400" : '#777879',
        },
        fb:{
          primary: "#2E89FF",
          primary1: "#263951",
          primary2: "#3D4C63"
        },

      },
      textColor: {
        fb:{
          primary1: "#263951",
          primary2: "#3D4C63"
        },
        primary: {
          "50":  "#E4E6EB",
          "100": "#E7E9ED",
          "200": "#B0B3B8"
        } 
      },
      placeholderColor:{
        primary: {
          "100":"#E4E6EB"
        } 
      },
    
    },
  },
}

