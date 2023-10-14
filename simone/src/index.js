import React from 'react';
import { createRoot } from "react-dom/client";
import Home from './Home';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    // 900: '#1a365d',
    // 800: '#153e75',
    // 700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Home />
    </ChakraProvider>
  </React.StrictMode>,
);

