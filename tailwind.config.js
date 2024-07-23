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
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Archivo", "sans-serif"],
      },
      colors: {
        primary: "#01615B",
        black: "#111",
        white: "#fff",
        transparent: "transparent",
      },
      extend: {
        screens: {
          laptop: { max: "1440px" },
          medium: { max: "959px" },
          small: { max: "768px" },
          xsmall: { max: "500px" },
        },
      },
    },
    plugins: [],
  };
  