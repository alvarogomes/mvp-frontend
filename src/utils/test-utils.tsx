import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from '@store/store';
import theme from '@styles/theme';

const AllTheProviders = ({ children, pageProps }) => {
    return (
        <Provider store={store}>
            <ChakraProvider resetCSS theme={theme}>
                {children}
            </ChakraProvider>
        </Provider>
    );
};

const customRender = (ui, options?) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
