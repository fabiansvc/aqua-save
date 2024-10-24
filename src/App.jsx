import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Sitemap from './pages/sitemap/Sitemap';
import Welcome from './pages/welcome/Welcome';
import Water from './pages/waterpollution/Water';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Sitemap" element={<Sitemap />} />
        <Route path="waterpollution/Water" element={<Water />} />
      </Routes>
    </Router>
  );
}

export default App;
