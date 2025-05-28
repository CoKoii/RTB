import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import "./index.scss";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const userInfo = useContext(UserContext);

  if (!userInfo) {
    return "";
  }

  const { workExperiences } = userInfo;

  if (!workExperiences || workExperiences.length === 0) {
    return "";
  }

  const currentWork = workExperiences[activeIndex];
  const mapKey = "f704ecbf48300d061c148b72441b4f08";

  return (
    <div id="work">
      <h1 className="title">工作经历</h1>
      <div className="experience-card">
        <div className="company-tabs">
          {workExperiences.map((work, index) => (
            <div
              key={work.id}
              className={`company-tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="company-name">{work.company}</span>
              <span className="company-period">{work.period}</span>
            </div>
          ))}
        </div>

        <div className="experience-content">
          <div className="experience-header">
            <h2>{currentWork.position}</h2>
            <h3>{currentWork.company}</h3>
            <span className="experience-period">{currentWork.period}</span>
          </div>

          <div className="experience-description">
            <ul>
              {currentWork.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="experience-location">
            <div className="location-address">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>{currentWork.location.address}</span>
            </div>

            <div className="location-map">
              <img
                src={`https://restapi.amap.com/v3/staticmap?location=${currentWork.location.coordinates}&scale=2&zoom=12&size=750*300&markers=mid,,A:${currentWork.location.coordinates}&key=${mapKey}`}
                alt={`${currentWork.company}地图位置`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
