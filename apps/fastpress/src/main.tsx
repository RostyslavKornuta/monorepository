import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from '@mui/material';
import { Header, theme } from '@monorepository/ui-kit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const navigationItems = [{ title: 'Sites', path: '/sites' }, { title: 'Library', path: '/library' }]

root.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <Header navigationItems={navigationItems}/>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
