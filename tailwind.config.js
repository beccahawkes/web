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
        sage: {
          50: '#f3f7f4',
          100: '#e6efe9',
          200: '#c8dccd',
          300: '#a9c9b2',
          400: '#8bb797',
          500: '#6ca47b', // core sage
          600: '#578463',
          700: '#42644b',
          800: '#2d4533',
          900: '#18261c',
        },
        cream: {
          50: '#fffdfa',
          100: '#fff7e9',
          200: '#ffefcf',
          300: '#ffe6b6',
          400: '#ffdd9c',
          500: '#f5d98a',
          600: '#e3c474',
          700: '#cdae5d',
          800: '#b69847',
          900: '#9f8231',
        },
        dgray: {
          50: '#f4f5f5',
          100: '#e9ebec',
          200: '#cfd3d6',
          300: '#b5bbbf',
          400: '#9ba3a8',
          500: '#818b91',
          600: '#626e74',
          700: '#485258',
          800: '#2e363b',
          900: '#161b1e', // very dark gray for text
        },
      },
    },
  },
  plugins: [],
}



