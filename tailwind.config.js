module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "pan-y 5s ease-in-out infinite",
        "pulse-slow": "pulse 1s infinite",
      },
      keyframes: {
        "pan-y": {
          "0%, 100%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(25%)",
          },
        },
      },
    },
  },
  plugins: [],
};
