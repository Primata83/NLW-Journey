/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      boxShadow: {
        shape: '8px 8px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.3), inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
      },
      backgroundImage: {
        pattern: 'url(/geometrico-vetor.jpg)'
      }
    },
  },
  plugins: [],
}

