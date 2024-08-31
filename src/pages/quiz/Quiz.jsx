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

  const onHandleButtonNext = useCallback(() => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Hola</h1>
      <p className="quiz-progress">Progreso del Quiz: {quiz.percentageQuizCompleted}%</p>
      <button onClick={onHandleButtonNext}>Siguiente</button>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  );
};

export default Quiz;
