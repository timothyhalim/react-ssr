import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.hydrate(
  <React.StrictMode>
    <App text="Hydrate"/>
  </React.StrictMode>,
  document.getElementById('root')
);
