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
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("education")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              教育经历
            </a>
          </li>
          <li>
            <a
              href="#skill"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skill")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              专业技能
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              工作经历
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("project")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              项目经历
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              个人简介
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
