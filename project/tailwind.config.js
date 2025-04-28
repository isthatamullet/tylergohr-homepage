/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-teal',
    'bg-teal/20',
    'border-teal',
    'border-teal/40',
    'bg-gold',
    'bg-gold/20',
    'border-gold',
    'border-gold/40',
    'bg-accent-green',
    'bg-accent-green/20',
    'border-accent-green',
    'border-accent-green/40',
    'bg-accent-red',
    'bg-accent-red/20',
    'border-accent-red',
    'border-accent-red/40',
    'bg-accent-blue',
    'bg-accent-blue/20',
    'border-accent-blue',
    'border-accent-blue/40'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          dark: '#051024',
          light: '#112240',
        },
        teal: {
          DEFAULT: '#64ffda',
          dark: '#4fd1b2',
          light: '#9fffec',
        },
        gold: {
          DEFAULT: '#ffd700',
          dark: '#e6c200',
          light: '#ffdf33',
        },
        mint: {
          DEFAULT: '#98FB98',
          dark: '#7adc7a',
          light: '#b6ffb6',
        },
        accent: {
          red: '#FF5252',
          green: '#4CAF50',
          blue: '#2196F3',
        },
      },
      spacing: {
        'screen': '100vh',
      },
      animation: {
        'fade-down': 'fadeDown 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0 },
          '50%': { transform: 'translateY(10px)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '50%': { transform: 'translateY(-20px) translateX(-50%)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};