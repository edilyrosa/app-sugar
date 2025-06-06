// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./app/**/*.{js,ts,jsx,tsx}",
//       "./pages/**/*.{js,ts,jsx,tsx}",
//       "./components/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         screens: {
//           s: "400px",
//           xs: "380px"
// 		  },
//       },
//     },
//     plugins: [
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   };
  








// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         xs: "380px",
//         s: "400px"
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//   ],
// };




/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'perspective-change': {
          '0%': {
            perspective: '800px',
            opacity: '0.1',
          },
          '100%': {
            perspective: '2400px',
            opacity: '1',
          },
        },
      },
      animation: {
        'perspective-transition': 'perspective-change 2s ease-in-out forwards',
      },
    }
  },
  plugins: [
    aspectRatio,
  ],
};

export default config;
