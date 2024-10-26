import Login from "../pages/login/Login.jsx";
import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter.jsx";
import ProtectedRouter from "./ProtectedRouter.jsx";
import Welcome from "../pages/welcome/Welcome.jsx";
import Sitemap from "../pages/sitemap/Sitemap.jsx";

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
    path: "/Welcome",
    element: (
      <ProtectedRouter>
        <Welcome />
      </ProtectedRouter>
    ),
  },
  {
     path: "/Sitemap",
     element: (
       <ProtectedRouter>
         <Sitemap />
       </ProtectedRouter>
     ),
   },
  {
    path: "/Water",
    element: (
      <ProtectedRouter>
        <Water/>
      </ProtectedRouter>
    ),
  },
  {
    path: "/Watershortages",
    element: (
      <ProtectedRouter>
        <Watershortages />
      </ProtectedRouter>
    ),
  },
  {
    path: "/Oceanacid",
    element: (
      <ProtectedRouter>
        <Oceanacid/>
      </ProtectedRouter>
    ),
  },
  {
    path: "/Microplastics",
    element: (
      <ProtectedRouter>
        <Microplastics/>
      </ProtectedRouter>
    ),
  },
]);

export default Routers;
