/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            dark: '#1C1E21',
            light: '#FFFCF2',
            button: {
               primary: 'hsl(231 65% 51%)',
               secondary: 'hsl(232 79% 59%)',
            },
            accent: {
               primary: '#A3D55D',
               secondary: '#CCF381',
            },
         },
      },
   },
   plugins: [],
};
