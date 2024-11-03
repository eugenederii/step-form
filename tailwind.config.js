/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  important: "#root",
  theme: {
    extend: {
      colors: {
        marine: "#002455",
        "purp-blue": "#473dff",
        "pastel-blue": "#adbeff",
        "light-blue": "#bfe2fd",
        "berry-red": "#ed3548",
        "cool-gray": "#9699ab",
        "light-gray": "#d6d9e6",
        mongo: "#f0f6ff",
        "my-blue": "#174a8b",
        "alaba-ster": "#fafbff",
      },
    },
  },
  plugins: [],
};
