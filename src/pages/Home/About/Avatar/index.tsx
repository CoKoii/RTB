import { useState, useEffect } from "react";
import "./index.scss";

const Avatar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // 在移动设备上，自动显示动画效果
    if (window.innerWidth <= 768) {
      setIsHovered(true);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className={`avatar ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
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
