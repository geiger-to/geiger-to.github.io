/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  extend: {
    screens: {
      print: { raw: "print" },
      screen: { raw: "screen" },
    },
  },
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
};
