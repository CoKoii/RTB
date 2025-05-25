import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import About from "../pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
export default router;
