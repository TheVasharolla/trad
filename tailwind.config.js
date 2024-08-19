/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D76DC"
      }
    },
    breakpoints: {
      sm: '480px'
    }
  },
  variants: {},
  plugins: [],
}
