import React from 'react';
import { ThemeModeProvider, useThemeMode } from './context/ThemeContext';
import Home from './pages/Home';

const AppContent = () => {
  const { mode } = useThemeMode();
  const background =
    mode === 'light'
      ? 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)'
      : 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)';
  return (
    <div
      style={{
        minHeight: '100vh',
        background,
        transition: 'background 0.5s',
      }}
    >
      <Home />
    </div>
  );
};

// Punto de entrada principal de la app React
function App() {
  return (
    <ThemeModeProvider>
      <AppContent />
    </ThemeModeProvider>
  );
}

export default App;
