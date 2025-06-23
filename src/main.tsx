import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import '../node_modules/preline/variants.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
