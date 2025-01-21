module.exports = {
  content: [
    "./index.html", // Ensure this matches your HTML file location
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
    "./public/**/*.html", // Add this if you have additional HTML files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
