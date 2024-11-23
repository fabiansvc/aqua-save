import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";

const ProtectedRouter = ({ children }) => {
  const { user } = useAuthStore();
  if (user === null) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRouter;
