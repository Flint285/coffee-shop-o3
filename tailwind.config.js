/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#3B2F2F',
        cream: '#F5EEE6',
        cardinal: '#C8102E',
        sage: '#9DB19E',
      },
    },
  },
  plugins: [],
}

