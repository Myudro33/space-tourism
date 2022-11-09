module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      // => @media (min-width: 640px) { ... }

      md: "760px",
      // => @media (min-width: 1024px) { ... }

      dp: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      blue: "#0b0d17",
      gray: "D0D6F9",
      white: '#ffffff'
    },
  },
  plugins: [],
};
