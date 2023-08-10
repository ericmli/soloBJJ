import React from 'react';
import Navigation from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { StatusBar } from 'react-native';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden/>
      <Navigation/>
    </ThemeProvider>
  );
}