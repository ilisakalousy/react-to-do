import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/default';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
);

