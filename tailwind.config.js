/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gammaYellowBackground: "#F2E57C",
        gammaYellowLight: "#FFF6B8",
      }
    },
  },
  plugins: [],
}

