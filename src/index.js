import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { mixin } from './styles/mixin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, mixin }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
