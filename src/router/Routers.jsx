import Login from "../pages/login/Login.jsx";
import Quiz from "../pages/quiz/Quiz.jsx";
import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter.jsx";
import ProtectedRouter from "./ProtectedRouter.jsx";

const Routers = createBrowserRouter([
     {
       path: "/",
       element: (
          <PublicRouter> 
               <Login />
          </PublicRouter>
          
     ),
     },
     {
     path: "/Quiz",
     element: (
     <ProtectedRouter>
          <Quiz />
     </ProtectedRouter>
     )
     },
]);

export default Routers;