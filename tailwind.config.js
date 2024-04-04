/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': "#ff8080",
        'yellow': "#ffff80",
        'dark-desaturated-cyan-graphic-design-text': "#304d40",
        'dark-blue-photography-text': "#1c3f4f",
        'dark-moderate-cyan-footer': "#446f75",
        'neutral-very-dark-desaturated-blue': "#0f1b23",
        'neutral-very-dark-grayish-blue': "#2f3a3d",
        'neutral-dark-grayish-blue': "#5c6a6f",
        'neutral-grayish-blue': "#a5b3b8",
        'white': "#ffffff",

      }
    },
  },
  plugins: [],
}