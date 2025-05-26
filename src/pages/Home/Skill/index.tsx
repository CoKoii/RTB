import React, { useContext, useState, useEffect, useRef } from "react";
import UserContext from "@/context/UserContext";
import "./index.scss";

interface SkillItemProps {
  name: string;
  level: number;
  gradient?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  gradient = "linear-gradient(90deg, #50fa7b 0%, #8be9fd 100%)",
}) => {
  const [animate, setAnimate] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" id="skill" ref={skillRef}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress ${animate ? "animate" : ""}`}
          style={
            {
              "--target-width": `${level}%`,
              background: gradient,
              width: animate ? `${level}%` : "0%",
            } as React.CSSProperties
          }
        ></div>
      </div>
    </div>
  );
};

const Skill: React.FC = () => {
  const user = useContext(UserContext);
  const mainSkillsData = user?.skills.mainSkills || [];
  const skillDescriptions = user?.skills.descriptions || [];

  return (
    <div className="skill-section" id="skills">
      <h2 className="section-title">专业技能</h2>
      <div className="container">
        <div className="skill-content">
          <div className="skill-progress-container">
            {mainSkillsData.map((skill, index) => (
              <SkillItem
                key={index}
                name={skill.name}
                level={skill.level}
                gradient={skill.gradient}
              />
            ))}
          </div>

          <div className="skill-descriptions">
            <ul>
              {skillDescriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
