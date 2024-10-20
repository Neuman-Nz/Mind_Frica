/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slideDown': 'slideDown 10s infinite ease-in-out',
        'splitText': 'splitText 2s ease forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { backgroundPosition: 'center top' },
          '100%': { backgroundPosition: 'center bottom' },
        },
        splitText: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
    },
  },
  plugins: [],
}
