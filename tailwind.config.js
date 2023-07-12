/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "99%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 0.5s linear",
      },
    },
  },
  plugins: [],
};
