import "./Quiz.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../../stores/use-quiz-store";
import useAuthStore from "../../stores/use-auth-store";

const Quiz = () => {
  const { incrementQuizProgress } = useQuizStore();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const onHandleButtonNext = useCallback(() => {
    incrementQuizProgress();
    navigate("/anima");
  }, [incrementQuizProgress, navigate]);

  if (!user) {
    return <p>Por favor, inicie sesión.</p>;
  }

  return (
    <div className="quiz-container">
      <img src="/logo.png" alt="App Logo" className="app-logo" />
      <div className="user-info">
        <img
          src={user.photoURL || "/images/default-avatar.png"}
          alt={user.displayName || "Usuario"}
          className="user-photo"
        />
        <h1 className="quiz-header">BIENVENIDO! {user.displayName}</h1>
      </div>
      <button onClick={onHandleButtonNext}>Siguiente</button>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Quiz;
