import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
