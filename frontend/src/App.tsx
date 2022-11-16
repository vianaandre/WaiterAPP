import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/globalStyles';
import { Header } from './components/Header';
import { theme } from './styles/theme';
import { Orders } from './components/Orders';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Orders />
        </ThemeProvider>
    );
}
