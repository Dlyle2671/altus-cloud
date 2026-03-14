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
        'altus-orange':      '#2D3142',   // charcoal grey — navbar/footer bg
        'altus-amber':       '#253048',   // slightly lighter charcoal hover
        'altus-lime':        '#00F5FF',   // neon cyan accent
        'altus-lime-bright': '#A3E635',   // lime green accent
        'altus-dark':        '#1E2030',   // darkest charcoal section bg
        'altus-charcoal':    '#252A3D',   // mid charcoal
        // aliases so existing JSX still compiles
        'altus-blue':  '#00F5FF',
        'altus-sky':   '#00CCDD',
        'altus-navy':  '#1E2030',
        'altus-mint':  '#A3E635',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
