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
        'altus-orange':  '#FF6B00',   // primary CTA orange
        'altus-amber':   '#FF9A00',   // lighter orange / hover
        'altus-lime':    '#84CC16',   // lime green accent
        'altus-lime-bright': '#A3E635', // bright lime for highlights
        'altus-dark':    '#0F1A0A',   // near-black dark green tint
        'altus-charcoal':'#1A1F14',   // dark section bg
        // keep old names as aliases so existing JSX still compiles
        'altus-blue':    '#FF6B00',
        'altus-sky':     '#FF9A00',
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
