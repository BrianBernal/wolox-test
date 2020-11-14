//  libraries
import React from 'react';

//  styles
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles/theme';

// routes
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
