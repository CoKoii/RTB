import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>我是layout</h1>
      <Outlet />
    </div>
  );
};
export default Layout;
