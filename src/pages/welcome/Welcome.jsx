import "./Welcome.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TreeWelcome from "./models-3d/TreeWelcome";
import Lights from "../../lights/LightsLogin";



const Welcome = () => {
  const { user, logout } = useAuthStore();
  const navigate  = useNavigate(); 

  const handleLogout = useCallback(() => {
    logout();
    navigate("/"); 
  }, [logout]);

  const onHandleButtonNext = useCallback(() => {
    navigate("/Sitemap"); 
  }, [navigate]);



  
  if (!user) {
    navigate("/Welcome")
    return <p>Por favor, inicie sesión.</p>; 
  }

  return (
    <div className="welcome-container">

      <>
        <Canvas className="app-logo"shadows camera={{position:[0,1,5]}}>
          <OrbitControls autoRotate/>
          <Lights/>
          <TreeWelcome/>
        </Canvas>
      </>

      <div className="user-info">
        <img className="user-photo" src={user.photoURL || "/images/default-avatar.png"} alt={user.displayName || "Usuario"}  />
        <h1 className="welcome-header">Bienvenido! {user.displayName}</h1>
      </div>
      <div className="button-container">
      <button className="button" onClick={onHandleButtonNext}>Siguiente</button>
      <button className="button" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Welcome;