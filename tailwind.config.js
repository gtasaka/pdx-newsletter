/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: '#1d3c34',
        moss: '#7d8c38',
        salmon: '#e76f51',
        fog: '#cbd5e0',
        slate: '#2d3748',
        rain: '#4a5568',
        cream: '#f7f1e3',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Open Sans', 'sans-serif'],
        display: ['Montserrat', 'Trebuchet MS', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
