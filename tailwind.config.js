module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '425px',
      // => @media (min-width: 428px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      semi: '1024px',
      lg: '1366px',
      // => @media (min-width: 1366px) { ... }

      xl: '1680px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Fira Sans', 'Shippori Mincho', 'sans-serif'],
    },
    fontSize: {
      xs: '.6rem',
      sm: '.8rem',
      tiny: '.9rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '1.8rem',
      '4xl': '2rem',
      '5xl': '2.2rem',
      '6xl': '2.4rem',
      '7xl': '2.6rem',
      '8xl': '2.8rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1d1d1d',
      white: '#fff',
      gray: {
        300: '#333',
        700: '#484848',
        800: '#707070',
        900: '#C6C6C6',
      },
      green: {
        200: '#aed32d',
      },
      red: {
        400: '#CC2E57',
      },
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/3': '33.3%',
      '4/9': '47%',
      '1/2': '50%',
      '2/3': '66.6%',
      '3/4': '75%',
      full: '100%',
    },
    boxShadow: {
      // DEFAULT: '3px 5px 5px rgb(0 0 0 / 30%)',
      // inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    },
    extend: {
      spacing: {
        13: '3.3rem',
        25: '6.25rem',
        35: '8.75rem',
        159: '37.5rem',
        '2/5': '40%',
        '7/15': '46.6%',
        '1/2img': '52%',
        '3/4img': '75%',
        '1/1img': '100%',
        minus3: '-0.75rem',
      },
      lineHeight: {
        footer: '10rem',
      },
      height: {
        '1/2screen': '50vh',
      },
      maxWidth: {
        20: '5rem',
        '7/15': '37.5rem',
      },
      borderRadius: {
        '3xl': '1.75rem',
        maru: '50%',
      },
      boxShadow: {
        DEFAULT: '3px 5px 5px rgb(0 0 0 / 30%)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      // ...
      scale: ['active', 'hover'],
    },
  },
  plugins: [],
};
