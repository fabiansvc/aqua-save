import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Anima from './pages/animation/Anima';
import SiteMap from './pages/site-map/Site-map';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Site-map" element={<SiteMap />} />
          <Route path="/anima" element={<Anima />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
