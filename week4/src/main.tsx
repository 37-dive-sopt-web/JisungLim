import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'pretendard/dist/web/variable/pretendardvariable.css';
import './shared/styles/reset.css.ts';
import './shared/styles/global.css.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
