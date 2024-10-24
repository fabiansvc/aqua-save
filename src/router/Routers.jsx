import Login from "../pages/login/Login.jsx";
import Quiz from "../pages/quiz/Quiz.jsx";
import Anima from "../pages/anima/Anima.jsx";

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
    ),
  },
  {
     path: "/Anima",
     element: (
       <ProtectedRouter>
         <Anima />
       </ProtectedRouter>
     ),
   },
]);

export default Routers;
