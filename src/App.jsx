import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Sitemap from './pages/sitemap/Sitemap';
import Welcome from './pages/welcome/Welcome';
import Water from './pages/waterpollution/Water';
import Microplastics from './pages/microplastics/Microplastics';
import Oceanacid from './pages/oceanacid/Oceanacid';
import Watershortages from './pages/watershortages/Watershortages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Sitemap" element={<Sitemap />} />
        <Route path="waterpollution/Water" element={<Water />} />
        <Route path="microplastics/Microplastics" element={<Microplastics />} />
        <Route path="oceanacid/Oceanacid" element={<Oceanacid />} />
        <Route path="watershortages/Watershortages" element={<Watershortages />} />
      </Routes>
    </Router>
  );
}

export default App;