/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Primary: '#0000000',
        secondary: '#fffff',
        'light-grey': '#f5f5f5',
        'border-c': '#ccc',
        'medium-grey': '#444444',
        'dark-grey': '#222222',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
