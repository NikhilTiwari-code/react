// App.jsx (or your main router configuration file)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Footer, Header , ErrorPage, Login,Signup} from './component/index';
import Layout  from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      }, 
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}