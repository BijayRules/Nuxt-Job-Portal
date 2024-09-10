/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        body: ["Jost", "sans-serif"],
      },

      boxShadow: {
        "th-shadow": "0 6px 15px rgba(64,79,104,.05)",
      },
    },
  },
  plugins: [],
};
