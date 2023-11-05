import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { OnlyChildrenProps } from 'containers/type';
import { extendTheme } from '@chakra-ui/react';

export const ThemeContextProvider = ({ children }: OnlyChildrenProps) => {
  const [theme, setTheme] = useState('');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};
