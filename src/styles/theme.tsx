import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
    colors: {
        primary: '#005B96',
        secondary: '#1BC5BD',
        black: '#16161D',
        text: '#011F4B',
        bg: {
            light: '#F1FAFE',
        },
    },
    fonts,
});

export default theme;

/* -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif; */
