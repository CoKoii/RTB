import "./index.scss";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const Footer = () => {
  const userInfo = useContext(UserContext);

  return (
    <div className="footer" id="about">
      <h2 className="section-title">个人简介</h2>
      <ul>
        {userInfo?.about.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
