import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home';
import { Layout } from './components/layout';
import { Login } from './pages/login';
const router = createBrowserRouter([
  {
    
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ]
  },
  {
    element: <Login/>,
    path: "/login"
  }
])

export { router } ;