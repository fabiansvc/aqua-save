import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";

const PublicRouter = ({children}) => {
     const {user} = useAuthStore()
     if(user){
          return <Navigate to = "/Welcome" replace />
     } 
     return children;
}

export default PublicRouter;