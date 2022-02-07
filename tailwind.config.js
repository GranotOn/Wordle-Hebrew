module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bump-to-view": "bump 700ms linear forwards",
        "flip-char": "flip-char 200ms linear forwards",
      },
      keyframes: {
        "flip-char": {
          "0%, 100%": {
            transform: "rotateX(0%)",
            "transform-style": "preserve-3d",
            "animation-timing-function": "cubic-bezier(0.8, 1, 1, 1)",
          },
          "50%": {
            transform: "rotateX(180deg)",
            "transform-style": "preserve-3d",
            "animation-timing-function": "cubic-bezier(0.8, 1, 1, 1)",
          },
        },
        bump: {
          "0%": {
            transform: "translateY(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 1, 1, 1)",
          },
          "60%": {
            transform: "translateY(-3%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "80%": {
            transform: "translateY(1%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },
      transitionDelay: {
        200: "200ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
        1400: "1400ms",
        1600: "1600ms",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
