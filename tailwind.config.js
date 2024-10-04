/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.666rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.2rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      colors: {
        'landit': '#231815',
        'atport': '#0062b1',
        'pitport': '#00aec4',
        'primary': {
          light: '#f0f3f5',
          DEFAULT: '#292e2d',
        },
        'secondary': '#575a5a',
        'attention': {
          light: '#fdf4e5',
          DEFAULT: '#ee8f00',
        },
        'warning': '#de4335',
        'emphasis': '#cb1706',
        'emptycar': '#0062b1',
        'vacant': '#3ea32d',
        'full': '#aa4a41',
        'text': '#23221f',
        'text-grey': '#706d65',
        'text-disabled': '#c1bdb7',
        'text-white': '#ffffff',
        'text-link': {
          light: '#f2f8fc',
          DEFAULT: '#0071c1',
          dark: '#005a9a',
        },
        'background': '#f6f6f6',
        'border': '#e5e5e5',
        'footer-background': '#ebeced',
        'form-background':'#fbfbfb',
        'form-border': '#a7a6a5',
        'form-background-disabled': '#e6e5e4',
        'table-header-background': '#e5e5e5',
        'table-border':'#d5d5d5',
      },
    },
  },
  plugins: [],
};
