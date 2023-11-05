import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeContextType } from './type';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a NotificationProvider');
  }
  return context;
};
