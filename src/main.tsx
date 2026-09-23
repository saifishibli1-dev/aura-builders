// Ensure window.fetch is safely assignable in preview environments that attach wrappers
if (typeof window !== 'undefined') {
  try {
    let currentFetch = window.fetch;
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (!desc || !desc.set) {
      Object.defineProperty(window, 'fetch', {
        get() {
          return currentFetch;
        },
        set(val) {
          currentFetch = val;
        },
        configurable: true,
        enumerable: true,
      });
    }
  } catch {
    // Ignore if not permitted
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
