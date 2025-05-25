import { useContext } from "react";
import UserContext from "@/context/UserContext";
import "./index.scss";

const Nav = () => {
  const user = useContext(UserContext);
  return (
    <nav className="nav">
      <div className="user">
        <div className="name">{user?.name}</div>
        <div className="job">{user?.job}</div>
      </div>
      <div className="menu">
        <ul>
          <li>About</li>
          <li>Education</li>
          <li>Work</li>
          <li>Skills</li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
