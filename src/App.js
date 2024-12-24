import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Penelitian from './pages/Penelitian';
import Daftar from './pages/Daftar';
import Pengabdian from './pages/Pengabdian';
import ProgramPengabdian from './pages/ProgramPengabdian';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="penelitian" element={<Penelitian />} />
          <Route path="daftar" element={<Daftar />} />
          <Route path="pengabdian" element={<Pengabdian />} />
          <Route path="programpengabdian" element={<ProgramPengabdian />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
