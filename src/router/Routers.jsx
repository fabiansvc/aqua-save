import Login from "../pages/login/Login.jsx";
import Quiz from "../pages/quiz/Quiz.jsx";
import Anima from "../pages/anima/Anima.jsx";
import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter.jsx";
import ProtectedRouter from "./ProtectedRouter.jsx";
import Welcome from "../pages/welcome/Welcome.jsx";
import Sitemap from "../pages/sitemap/Sitemap.jsx";
import Oceanacid from "../pages/oceanacid/Oceanacid.jsx";
import Watershortages from "../pages/watershortages/Watershortages.jsx";
import Waterpollution from "../pages/waterpollution/Waterpollution.jsx";
import Microplastics from "../pages/microplastics/Microplastics.jsx";

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
    path: "/quiz",
    element: (
      <ProtectedRouter>
        <Welcome />
      </ProtectedRouter>
    ),
  },
  {
     path: "/anima",
     element: (
       <ProtectedRouter>
         <Sitemap />
       </ProtectedRouter>
     ),
   },
  {
     path: "/welcome",
     element: (
       <ProtectedRouter>
         <Welcome />
       </ProtectedRouter>
     ),
   },
  {
     path: "/sitemap",
     element: (
       <ProtectedRouter>
          <Sitemap />
       </ProtectedRouter>
     ),
   },
  {
     path: "/oceanacid",
     element: (
       <ProtectedRouter>
         <Oceanacid />
       </ProtectedRouter>
     ),
   },
   {
    path: "/watershortages",
    element: (
      <ProtectedRouter>
        <Watershortages />
      </ProtectedRouter>
    ),
  },
  {
    path: "/waterpollution",
    element: (
      <ProtectedRouter>
        <Waterpollution/>
      </ProtectedRouter>
    ),
  },
  {
    path: "/microplastics",
    element: (
      <ProtectedRouter>
        <Microplastics />
      </ProtectedRouter>
    ),
  },
   
  
]);

export default Routers;
