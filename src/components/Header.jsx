import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/Quiz.jsx"> Inicio </Link>
          </li>
          <li>
            <Link to="/Anima.jsx"> Animaciones </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;