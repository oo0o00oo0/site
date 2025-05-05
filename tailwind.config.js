module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom": ["YourCustomFont", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
