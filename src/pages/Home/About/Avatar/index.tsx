import { useState } from "react";
import "./index.scss";

const Avatar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`avatar ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tech-icons">
        <img className="icon vscode" src="/vscode.svg" alt="VSCode" />
        <img className="icon github" src="/github.svg" alt="GitHub" />
        <img className="icon vue" src="/vue.svg" alt="Vue" />
        <img className="icon react" src="/react.svg" alt="React" />
      </div>
      <img className="avatar-img" src="/avatar1.png" alt="" />
    </div>
  );
};

export default Avatar;
