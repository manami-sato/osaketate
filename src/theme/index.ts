import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#333333',
  gray: '#9F9F9F',
  lightGray: '#F4F4F4',
  white: '#FFFFFF',
  // blue: '#232F9C',
  blue: '#323063',
  purple: '#8B3AF2',
  orange: '#F2923A',
  yellow: '#FDEB48',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black',
      fontSize: '1.4rem',
      fontFamily: 'body',
      main: {
        width: '90vw',
        margin: '0 auto',
      },
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
    '::selection': {
      background: 'tomato',
    },
    '::-moz-selection': {
      background: 'tomato',
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
  price: "'Anton', sans-serif",
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
};
const textStyles = {
  pagenation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '9999px',
    transition: '0.2s background',
    svg: {
      width: '40px',
      height: '40px',
      color: 'white',
    },
    '&:hover': {
      background: 'secondary',
    },
  },
  bodyWidth: {
    width: {
      base: '90vw',
      sm: '80vw',
    },
    mx: 'auto',
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
