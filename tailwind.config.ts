module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-focus", "focus", "hover"],
      opacity: ["group-focus", "focus", "hover"],
    },
  },
  plugins: [],
};
