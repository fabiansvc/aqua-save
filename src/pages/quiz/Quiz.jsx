import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";
import useAuthStore from "../../stores/use-auth-store";

const Quiz = () => {
  const {quiz, incrementQuizProgress } = useQuizStore();

  const {logout} = useAuthStore()
  const handleLogout = useCallback(()=>{
    logout()
  },[logout])



  return (
    <div className="quiz-container">
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  );
};

export default Quiz;
