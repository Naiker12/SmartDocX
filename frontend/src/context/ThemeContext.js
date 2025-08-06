import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: { main: mode === 'light' ? '#1976d2' : '#1a237e' },
        background: {
          default: mode === 'light'
            ? 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)'
            : 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
        },
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
