import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
