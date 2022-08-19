import './index.css';

import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElement!);
root.render(<App />);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
