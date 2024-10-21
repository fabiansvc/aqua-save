import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser).then((response) => {
        if (response.success) {
          navigate("/Quiz");
        } else {
          console.error("Error al crear el usuario:", response.error);
        }
      });
    }
  }, [user, navigate]);


  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="container-login">
      <img src="/logo.png" alt="App Logo" className="app-logo" />
      {user ? (
        <>
          <button className="button-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
<<<<<<< HEAD
        <p className="welcome-text">Bienvenido! Cada Gota Cuenta</p>
          <button onClick={handleLogin}>Iniciar sesión</button>
        </>
      )}
=======
          <p className="welcome-text">Bienvenido! Cada Gota Cuenta</p>
          <button className= "button-login" onClick={handleLogin}>Iniciar sesión</button>
        </>
      )}
      <div className="waves">
        <img src="/waves.png" alt="Waves img" className="waves-img"/>
      </div>
>>>>>>> 10a87a6958a733f9ffeb93636f2ace8b8caab133
    </div>
  );
};

export default Login;
