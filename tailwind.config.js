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
  



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        s: "400px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};