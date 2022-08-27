/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['century-gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
        roboto: ['roboro', 'sans-serif']
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationtimingfunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationtimingfunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      backgroundImage: {
        background: 'linear-gradient(248.82deg, #000000 58.79%, #393939 110.14%, #272727 110.14%);'
      }
    }
  },
  plugins: []
};
