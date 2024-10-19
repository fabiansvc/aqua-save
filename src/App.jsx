import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Sitemap from './pages/sitemap/Sitemap';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />  
        <Route path="/Sitemap" element={<Sitemap />} />
      </Routes>
    </Router>
  );
}

export default App;