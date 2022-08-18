import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './layout';

// pages
import Index from './views/index';
import NotFound from './views/404';
import Counter from './views/counter';
import About from './views/about';

// condition for hash routing
if (!(window.location.href.indexOf('#') !== -1)) {
  window.location.hash = '/';
}

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
          </Route>
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
