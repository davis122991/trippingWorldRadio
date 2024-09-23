/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#AAAAAA',
        background: '#292929',
        text: '#D8D8D8',
        primary: '#2C1F38',
        secondary: '#2C1343',
      },
    },
  },
  plugins: [],
};
