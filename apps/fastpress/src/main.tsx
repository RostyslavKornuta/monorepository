import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          boxShadow: 'none',
          backgroundColor: '#6FB295',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Ubuntu, sans-serif',
          lineHeight: '20px',
          color: '#FFFFFF',
          borderRadius: '8px',
          textTransform: 'unset',
          '&:hover': {
            backgroundColor: '#598E77',
            boxShadow: 'none',
          },
          '&:pressed': {
            backgroundColor: '#436B59'
          },
          ':active': {
            backgroundColor: '#6FB295'
          },
          ':disabled': {
            backgroundColor: '#A9D1BF'
          }
        }
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#F1F2F4',
            color: '#2B334A',
            '&:hover': {
              backgroundColor: '#E7E8EC'
            },
            '&:pressed': {
              backgroundColor: '#CBCEDA'
            },
            ':active': {
              backgroundColor: '#F1F2F4'
            },
            ':disabled': {
              backgroundColor: '#F1F2F4',
              color: '#B2B5C5'
            }
          }
        },
        {
          props: { color: 'danger' },
          style: {
            backgroundColor: '#FEEFEF',
            color: '#DA1414',
            '&:hover': {
              backgroundColor: '#F8D0D0'
            },
            '&:pressed': {
              backgroundColor: '#F0A1A1'
            },
            ':active': {
              backgroundColor: '#FEEFEF'
            },
            ':disabled': {
              backgroundColor: '#FEEFEF',
              color: '#F0A1A1'
            }
          }
        }
      ]
    }
  }
});

root.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
