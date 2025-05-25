import { Outlet } from "react-router-dom";
import "@/pages/Layout/index.scss";
const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};
export default Layout;
