/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E5484D',
        },
        background: {
          dark: '#0F1012',
        },
        surface: {
          dark: '#141517',
          light: '#1B1C20',
        },
        border: {
          subtle: '#26272B',
        },
        text: {
          muted: '#9CA3AF',
        },
      },
      boxShadow: {
        'primary-soft': '0 10px 30px -10px rgba(229, 72, 77, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
