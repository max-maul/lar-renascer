import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home';
import { Layout } from './components/layout';
import { Login } from './pages/login';
import { Acolhidas } from "./pages/acolhidas";
import { Benfeitores } from "./pages/benfeitores";
const router = createBrowserRouter([
  {
    
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/acolhidas",
        element:<Acolhidas/>
      },
      {
        path: "/benfeitores",
        element:<Benfeitores/>
      }
    ]
  },
  {
    element: <Login/>,
    path: "/login"
  }
])

export { router } ;