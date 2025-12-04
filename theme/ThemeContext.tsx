import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes, ThemeName } from './colors';
import { designSystem } from './designSystem';
import { textInputColors } from './text-input-colors';

type ThemeContextType = {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  theme: typeof themes[ThemeName] & typeof designSystem;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('english');

  const value = {
    currentTheme,
    setTheme: setCurrentTheme,
    theme: { ...themes[currentTheme], ...designSystem, textInput: textInputColors},
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
