import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import App from './App';

const root = hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App text="Hydrate"/>
  </React.StrictMode>
);
