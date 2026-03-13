/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'altus-orange':  '#FF4500',   // vivid OrangeRed — electric, vibrant
        'altus-amber':   '#FF6A00',   // bright orange hover
        'altus-lime':    '#84CC16',   // lime green accent
        'altus-lime-bright': '#A3E635',
        'altus-dark':    '#0F1A0A',
        'altus-charcoal':'#1A1F14',
        // aliases so existing JSX still compiles
        'altus-blue':    '#FF4500',
        'altus-sky':     '#FF6A00',
        'altus-navy':    '#0F1A0A',
        'altus-mint':    '#84CC16',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
