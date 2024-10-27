import Login from "../pages/login/Login.jsx";
import Quiz from "../pages/quiz/Quiz.jsx";
import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter.jsx";
import ProtectedRouter from "./ProtectedRouter.jsx";
import Welcome from "../pages/welcome/Welcome.jsx";
import Sitemap from "../pages/sitemap/Sitemap.jsx";
import Oceanacid from "../pages/oceanacid/Oceanacid.jsx";
import Watershortages from "../pages/watershortages/Watershortages.jsx";
import Microplastics from "../pages/microplastics/Microplastics.jsx";
import Water from "../pages/waterpollution/Water.jsx";

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
        <Water/>
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
