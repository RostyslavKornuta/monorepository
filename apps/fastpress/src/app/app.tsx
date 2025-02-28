import { Button } from '@mui/material';

export function App() {
  return (
    <>
      <Button variant="contained" color="primary" disabled={true}>
        Label
      </Button>
      <Button variant="contained" color="secondary">
        Label
      </Button>
      <Button variant="contained" color="danger">
        Label
      </Button>
    </>
  );
}

export default App;
