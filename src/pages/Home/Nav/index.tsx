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
          <li>
            <a href="#education">教育经历</a>
          </li>
          <li>
            <a href="#skill">专业技能</a>
          </li>
          <li>
            <a href="#work">工作经历</a>
          </li>
          <li>
            <a href="#project">项目经历</a>
          </li>
          <li>
            <a href="#about">个人简介</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
