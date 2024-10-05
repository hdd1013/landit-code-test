import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

import { FormProvider } from './contexts/FormContext.tsx';
import { EstateDataProvider } from './contexts/EstateDataContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormProvider>
      <EstateDataProvider>
        <App />
      </EstateDataProvider>
    </FormProvider>
  </StrictMode>,
);
