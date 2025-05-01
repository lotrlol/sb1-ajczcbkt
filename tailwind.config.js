/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E53CC1',
          light: '#FF9EE3',
          dark: '#D054B1',
        },
        dark: {
          DEFAULT: '#050414',
          light: '#0A0821',
          medium: '#0C0C16',
          card: '#121026',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        glow: '0 0 15px rgba(229, 60, 193, 0.6)',
      },
    },
  },
  plugins: [],
};