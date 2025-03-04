import { Navigate, Route, Routes } from 'react-router-dom';
import { Sites } from './modules/sites';
import { Library } from './modules/library';

export function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Navigate to="/sites" replace />} />

        <Route path="/sites" element={<Sites />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
