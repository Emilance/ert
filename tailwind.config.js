/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent:"transparent",
        primary: '#FF0000', 
        blue : {
          800 :  '#138DA0',

        },
        green:{   
          600 :'#27CD27',
          700 : '#1BB81B',
    
        },
        grey: {
         dark: "#343A40",
         light:"#4F4F4F"
        }
      },
      fontFamily: {
        primary: 'Open Sans',
      },
    },
  },
  plugins: [],
}
