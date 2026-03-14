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
        'altus-orange':  '#38BDF8',   // vivid OrangeRed — electric, vibrant
        'altus-amber':   '#0EA5E9',   // bright orange hover
        'altus-lime':    '#84CC16',   // lime green accent
        'altus-lime-bright': '#A3E635',
        'altus-dark':    '#0F1A0A',
        'altus-charcoal':'#1A1F14',
        // aliases so existing JSX still compiles
        'altus-blue':    '#38BDF8',
        'altus-sky':     '#0EA5E9',
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
