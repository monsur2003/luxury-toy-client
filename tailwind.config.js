/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#df1976",

               secondary: "#c0e88d",

               accent: "#d68066",

               neutral: "#28212B",

               "base-100": "#FFFFFF",

               info: "#79A4D2",

               success: "#7AE1D5",

               warning: "#F59638",

               error: "#E6334E",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
