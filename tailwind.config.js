/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        link: {
          lighter: '#f2f8fc',
          DEFAULT: '#0071c1',
          darker: '#005a9a',
        },
        success: {
          DEFAULT: '#3ea32d',
        },
        warning: {
          lighter: '#fdf4e5',
          DEFAULT: '#DE4335',
        },
        attention: {
          DEFAULT: '#EE8F00',
        },
        text: {
          light: '#706D65',
          DEFAULT: '#23221F',
        },
        disabled: {
          lighter: '#f6f6f6',
          light: '#c1bdb7',
          DEFAULT: '#C1BDB7',
        },
        primary: {
          DEFAULT: '#292e2d',
          light: '#545857',
          lighter: '#7f8281',
          lightest: '#F0F3F5',
        },
        lightlink: {
          DEFAULT: '#f2f8fc',
          dark: '#d9eaf6',
        },
      },
    },
  },
  plugins: [],
};
