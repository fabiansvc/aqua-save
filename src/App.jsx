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
        <Route path="/Water" element={<Water />} />
        <Route path="/Microplastics" element={<Microplastics />} />
        <Route path="/Oceanacid" element={<Oceanacid />} />
        <Route path="/Watershortages" element={<Watershortages />} />
      </Routes>
    </Router>
  );
}

export default App;
