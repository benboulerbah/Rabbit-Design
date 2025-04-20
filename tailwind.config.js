/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1a1a',
          DEFAULT: '#2d2d2d',
          light: '#3d3d3d',
        },
        accent: {
          light: '#e6d5ff',
          DEFAULT: '#b388ff',
          dark: '#7c4dff',
        }
      }
    },
  },
  plugins: [],
};