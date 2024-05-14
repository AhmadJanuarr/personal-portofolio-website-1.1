import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '475px',
      // => @media (min-width: 475px) 

      'tablet': '768px',
      // => @media (min-width: 960px) 

      'laptop': '1280px',
      // => @media (min-width: 1280px) 

      'desktop': '1536px',
      // => @media (min-width: 1536px) 
    },
    fontFamily: {
      lusitana: ["Lusitana", "serif"],
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },

    extend: {
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  darkMode: "class",
});
