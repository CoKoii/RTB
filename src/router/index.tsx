import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import About from "@/pages/About";
import Home from "@/pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
export default router;
