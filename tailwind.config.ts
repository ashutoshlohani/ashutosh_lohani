const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

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
   plugins: [require('@tailwindcss/aspect-ratio'), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme('colors'));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ':root': newVars,
   });
}
