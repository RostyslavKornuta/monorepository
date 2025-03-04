import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          boxShadow: 'none',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Ubuntu, sans-serif',
          lineHeight: '20px',
          borderRadius: '8px',
          textTransform: 'unset',
          ':hover': {
            boxShadow: 'none'
          }
        }
      },
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            backgroundColor: '#6FB295',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#598E77',
              boxShadow: 'none'
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
        {
          props: { color: 'primary', variant: 'outlined' },
          style: {
            backgroundColor: 'transparent',
            color: '#6FB295',
            borderColor: '#A9D1BF',
            '&:hover': {
              backgroundColor: '#F1F7F4'
            },
            '&:pressed': {
              backgroundColor: '#E2F0EA'
            },
            ':disabled': {
              color: '#A9D1BF',
              borderColor: '#A9D1BF'
            }
          }
        },
        {
          props: { color: 'primary', variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            color: '#6FB295',
            '&:hover': {
              borderColor: '#A9D1BF',
              backgroundColor: '#F1F7F4'
            },
            '&:pressed': {
              borderColor: '#A9D1BF',
              backgroundColor: '#E2F0EA'
            },
            ':disabled': {
              color: '#A9D1BF'
            }
          }
        },
        {
          props: { color: 'secondary', variant: 'contained' },
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
          props: { color: 'secondary', variant: 'outlined' },
          style: {
            backgroundColor: 'transparent',
            color: '#2B334A',
            borderColor: '#CBCEDA',
            '&:hover': {
              backgroundColor: '#F1F2F4'
            },
            '&:pressed': {
              backgroundColor: '#E7E8EC'
            },
            ':disabled': {
              borderColor: '#CBCEDA',
              color: '#B2B5C5'
            }
          }
        },
        {
          props: { color: 'secondary', variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            color: '#2B334A',
            '&:hover': {
              borderColor: '#CBCEDA',
              backgroundColor: '#F1F2F4'
            },
            '&:pressed': {
              borderColor: '#CBCEDA',
              backgroundColor: '#E7E8EC'
            },
            ':disabled': {
              color: '#B2B5C5'
            }
          }
        },
        {
          props: { color: 'danger', variant: 'contained' },
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
        },
        {
          props: { color: 'danger', variant: 'outlined' },
          style: {
            backgroundColor: 'transparent',
            color: '#DA1414',
            borderColor: '#F0A1A1',
            '&:hover': {
              backgroundColor: '#FEEFEF'
            },
            '&:pressed': {
              backgroundColor: '#F8D0D0'
            },
            ':disabled': {
              borderColor: '#F0A1A1',
              color: '#F0A1A1'
            }
          }
        },
        {
          props: { color: 'danger', variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            color: '#DA1414',
            '&:hover': {
              borderColor: '#F0A1A1',
              backgroundColor: '#FFF7F7'
            },
            '&:pressed': {
              borderColor: '#F0A1A1',
              backgroundColor: '#FEEFEF'
            },
            ':disabled': {
              color: '#F0A1A1'
            }
          }
        }
      ]
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: '400px',
          height: 'unset',
          padding: '13px 10px',
          border: '1px solid #E7E8EC',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          color: '#171F33',
          letterSpacing: '0'
        },
        input: {
          height: 'unset',
          padding: '0',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          color: '#171F33'
        }
      }
    }
  }
});
