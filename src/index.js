import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import RandomQuote from './Qoutes.jsx';
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <RandomQuote />
  </StrictMode>
);
