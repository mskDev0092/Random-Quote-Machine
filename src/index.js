import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import RandomQuote from './qoutes.js';
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <RandomQuote />
  </StrictMode>
);
