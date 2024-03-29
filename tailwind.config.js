const colors = require('tailwindcss/colors')
const tailwindCSSAnimista =require("tailwindcss-animistacss")

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ripple: () => ({
      colors,
    }),
    extend: {
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "100%"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(250px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "100%"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(650px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "100%"
          }
        },
        "slide-out-right": {
          "0%": {
            transform: "translateX(0)",
            opacity: "100%"
          },
          to: {
            transform: "translateX(650px)",
            opacity: "0"
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "100%"
          },
          to: {
            transform: "translateX(-650px)",
            opacity: "0"
          },
        },
        "slide-out-down": {
          "0%": {
            transform: "translateY(0)",
            opacity: "100%",
          },
          to: {
            transform: "translateY(1000px)",
            opacity: "100%",
          },
        },
        "slide-in-fwd-right": {
          "0%": {
            transform: "translateZ(700px) translateX(1400px)",
          },
          to: {
            transform: "translateZ(0) translateX(0)",
          }
        },
        "slide-out-fwd-right": {
          "0%": {
            transform: "translateZ(0) translateX(0)"
          },
          to: {
            transform: "translateZ(700px) translateX(1400px)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          to: {
            opacity: "100%"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "100%"
          },
          to: {
            opacity: 0
          },
        },
        "nav-slide-down": {
          "0%": {
            transform: "translateY(-250px)",
          },
          to: {
            transform: "translateY(0)",
          }
        },
        "slide-margin-right": {
          "0%": {
            marginLeft: "2000px"
          },
          to: {
            marginLeft: "0"
          }
        },
        "slide-margout-right": {
          "0%": {
            marginLeft: "0"
          },
          to: {
            marginLeft: "2000px"
          }
        }
      },
      animation: {
        "slide-up": "slide-in-bottom .5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-right": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-right-out": "slide-out-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-left-out": "slide-out-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-down-out": "slide-out-down 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        "fade-down": "fade-in-slide-down .5s ease-in-out  both",
        "fade-in": "fade-in .5s ease-in-out both",
        "fade-out": "fade-out .5s ease-in-out both",
        "nav-slide-down": "nav-slide-down .5s ease-in-out both",
        "slide-in-fwd-right": "slide-in-fwd-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-fwd-right": "slide-out-fwd-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-margin-right": "slide-margin-right 0.5s ease-in-out  both",
        "slide-margout-right": "slide-margout-right 0.5s ease-in-out  both"

      },
      fontFamily: {
        'Abril': ['Abril Fatface'],
        'Lato': ['Lato'],
        'Piazzolla': ['Piazzolla'],
        'Sorts': ['Sorts Mill Goudy'],
        'Cinzel': ['Cinzel'],
        'Spartan': ['League Spartan'],
        'Oswald': ['Oswald'],
        'Ledger': ['Ledger'],
        'Lexend': ['Lexend Tera'],
        'Lora': ['Lora'],
        'Berkshire': ['Berkshire Swash'],
        'Rubik': ['Rubik'],
        'Inter': ["Inter"],
        'Playfair': ['Playfair Display']
      },
      dropShadow: {
        'Door': '0 4px 10px rgba(0, 0, 0, 0.25)'
      },
      screens: {
        "phone": { 'min': '300px', 'max': '640px' },
        "desk": '1300px'
      },
      colors: {
        'dark-000': '#C1C2C5',
        dark: {
          100: '#A6A7AB',
          200: '#909296',
          300: '#5c5f66',
          400: '#373A40',
          500: '#2C2E33',
          600: '#25262b',
          700: '#1A1B1E',
          800: '#141517',
          900: '#101113',
        },
        'gray-000': '#f8f9fa',
        gray: {
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        'red-000': '#fff5f5',
        red: {
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ffa8a8',
          500: '#ff6b6b',
          600: '#fa5252',
          700: '#f03e3e',
          800: '#e03131',
          900: '#c92a2a',
        },
        'pink-000': '#fff0f6',
        pink: {
          100: '#ffdeeb',
          200: '#fcc2d7',
          300: '#faa2c1',
          400: '#f783ac',
          500: '#f06595',
          600: '#e64980',
          700: '#d6336c',
          800: '#c2255c',
          900: '#a61e4d',
        },
        'grape-000': '#f8f0fc',
        grape: {
          100: '#f3d9fa',
          200: '#eebefa',
          300: '#e599f7',
          400: '#da77f2',
          500: '#cc5de8',
          600: '#be4bdb',
          700: '#ae3ec9',
          800: '#9c36b5',
          900: '#862e9c',
        },
        'violet-000': '#f3f0ff',
        violet: {
          100: '#e5dbff',
          200: '#d0bfff',
          300: '#b197fc',
          400: '#9775fa',
          500: '#845ef7',
          600: '#7950f2',
          700: '#7048e8',
          800: '#6741d9',
          900: '#5f3dc4',
        },
        'indigo-000': '#edf2ff',
        indigo: {
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc7',
        },
        'blue-000': '#e7f5ff',
        blue: {
          100: '#d0ebff',
          200: '#a5d8ff',
          300: '#74c0fc',
          400: '#4dabf7',
          500: '#339af0',
          600: '#228be6',
          700: '#1c7ed6',
          800: '#1971c2',
          900: '#1864ab',
        },
        'cyan-000': '#e3fafc',
        cyan: {
          100: '#c5f6fa',
          200: '#99e9f2',
          300: '#66d9e8',
          400: '#3bc9db',
          500: '#22b8cf',
          600: '#15aabf',
          700: '#1098ad',
          800: '#0c8599',
          900: '#0b7285',
        },
        'teal-000': '#e6fcf5',
        teal: {
          100: '#c3fae8',
          200: '#96f2d7',
          300: '#63e6be',
          400: '#38d9a9',
          500: '#20c997',
          600: '#12b886',
          700: '#0ca678',
          800: '#099268',
          900: '#099268',
        },
        'green-000': '#ebfbee',
        green: {
          100: '#d3f9d8',
          200: '#b2f2bb',
          300: '#8ce99a',
          400: '#69db7c',
          500: '#51cf66',
          600: '#40c057',
          700: '#37b24d',
          800: '#2f9e44',
          900: '#2b8a3e',
        },
        'lime-000': '#f4fce3',
        lime: {
          100: '#e9fac8',
          200: '#d8f5a2',
          300: '#c0eb75',
          400: '#a9e34b',
          500: '#94d82d',
          600: '#82c91e',
          700: '#74b816',
          800: '#66a80f',
          900: '#5c940d',
        },
        'yellow-000': '#fff9db',
        yellow: {
          100: '#fff3bf',
          200: '#ffec99',
          300: '#ffe066',
          400: '#ffd43b',
          500: '#fcc419',
          600: '#fab005',
          700: '#f59f00',
          800: '#f08c00',
          900: '#e67700',
        },
        'orange-000': '#fff4e6',
        orange: {
          100: '#ffe8cc',
          200: '#ffd8a8',
          300: '#ffc078',
          400: '#ffa94d',
          500: '#ff922b',
          600: '#fd7e14',
          700: '#f76707',
          800: '#e8590c',
          900: '#d9480f',
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-ripple')(),
    tailwindCSSAnimista({
      classes:['animate__slide-in-right', 'animate__slide-out-left'],
      settings:{
        'animate__slide-in-right':{
          duration:1000,
          delay:0,
          iterationCounts:1,
          isInfinite:false,
        },
        'animate__slide-out-left':{
          duration:1000,
          delay:0,
          iterationCounts:1,
          isInfinite:false,
        }
      },
      variants:["responsive"]
    }),
  ],
};
