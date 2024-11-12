import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import Gridselection from "../../components/Gridselection.jsx"


const WelcomeText = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Welcome');
  };

  const { user } = useAuthStore();

  return (
        <div>     
          <h1 className="title-text">SITIOS DE INTERES DE NUESTRA PAGINA</h1>
          <p className="content-text"> Hola, {user?.displayName || "querido usuario"} Aquí podrás encontrar
          enlaces a todas las secciones importantes de nuestra aplicación.</p>
          <h2 className="subtitle-text"> Seleccionar temas </h2> 
          <Gridselection />
          <button className= "button-back" onClick={handleClick}>Volver</button>
        </ div>
  );
};

export default WelcomeText;
