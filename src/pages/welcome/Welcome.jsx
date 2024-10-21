import "./Welcome.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";

const Welcome = () => {
  const { user, logout } = useAuthStore();
  const navigate  = useNavigate(); 

  const handleLogout = useCallback(() => {
    logout();
    navigate("/");
  }, [logout]);

  const onHandleButtonNext = useCallback(() => {
    navigate("/Sitemap");  // Redirigir al SiteMap
  }, [navigate]);

  if (!user) {
    return <p>Por favor, inicie sesión.</p>; 
  }

  return (
    <div className="welcome-container">
      <img src="/logo.png" alt="App Logo" className="app-logo" />
      <div className="user-info">
        <img src={user.photoURL || "/images/default-avatar.png"} alt={user.displayName || "Usuario"} className="user-photo" />
        <h1 className="welcome-header">Bienvenido! {user.displayName}</h1>
      </div>
      <button onClick={onHandleButtonNext}>Siguiente</button>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Welcome;