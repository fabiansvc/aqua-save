import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
<<<<<<< HEAD
import Anima from './pages/animation/Anima';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';
=======
import Sitemap from './pages/sitemap/Sitemap';
import Welcome from './pages/welcome/Welcome';
>>>>>>> a7a224e1cd80a31b2d1316152540836da3a46cbc

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/anima" element={<Anima />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
=======
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />  
        <Route path="/Sitemap" element={<Sitemap />} />
      </Routes>
>>>>>>> a7a224e1cd80a31b2d1316152540836da3a46cbc
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a7a224e1cd80a31b2d1316152540836da3a46cbc
