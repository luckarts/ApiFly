import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import WrapperContext from 'containers/WrapperContext';
import './serviceWorker';
import './i18n';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <WrapperContext>
        <ThemeEditorProvider>
          <App />
        </ThemeEditorProvider>
      </WrapperContext>
    </ChakraProvider>
  </React.StrictMode>
);
