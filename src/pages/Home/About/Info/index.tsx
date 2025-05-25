import { useContext } from "react";
import "./index.scss";
import UserContext from "@/context/UserContext";
import { GithubFilled, PhoneFilled, WechatFilled } from "@ant-design/icons";
const Info = () => {
  const user = useContext(UserContext);
  return (
    <div className="info">
      <div className="top">
        <div className="left">
          <img src={user?.photo} alt="" />
          <div className="welcome">
            <div className="name">你好，我是{user?.name}</div>
            <div className="job">
              {user?.gender} &nbsp; {user?.age}岁 &nbsp; {user?.email} &nbsp;
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <GithubFilled />
            </li>
            <li>
              <WechatFilled />
            </li>
            <li>
              <a href={`tel:+86${user?.phone}`}>
                <PhoneFilled />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="title">I’m just a fucking front-end developer.</h1>
      <div className="desc">
        {user?.education?.school} ｜{user?.education?.major}｜
        {user?.education?.degree} ｜ {user?.education?.time?.start.slice(0, 4)}{" "}
        - {user?.education?.time?.end.slice(0, 4)}
        <br />
        {user?.education?.description?.map((desc, index) => (
          <span key={index}>
            {desc}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
};
export default Info;
