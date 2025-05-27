import { useEffect, useState, useContext, useRef } from "react";
import { Button, Modal, Typography, List, Tag } from "antd";
import {
  ArrowRightOutlined,
  AimOutlined,
  BulbOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import UserContext from "../../../context/UserContext";
import "./index.scss";

const { Title, Paragraph, Text } = Typography;

interface ProjectDetail {
  period: string;
  role: string;
  intro: string;
  tags: string[];
  tech: string[];
}

interface Project {
  id: string | number;
  name: string;
  description: string;
  link: string;
  status?: string;
  darkColor: string;
  bgImage?: string;
  details: ProjectDetail;
}

interface ProjectDetailModalProps {
  visible: boolean;
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal = ({
  visible,
  project,
  onClose,
}: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Modal
      title={
        <div className="modal-title">
          <span className="project-modal-name">{project.name}</span>
          {project.status && <Tag color="blue">{project.status}</Tag>}
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          关闭
        </Button>,
        <Button
          key="visit"
          type="primary"
          icon={<LinkOutlined />}
          onClick={() =>
            window.open(project.link, "_blank", "noopener,noreferrer")
          }
        >
          访问网站
        </Button>,
      ]}
      width={700}
      className="project-detail-modal"
    >
      <div className="project-detail-content">
        <div className="project-meta">
          <div className="meta-item">
            <Text className="meta-label">项目时间:</Text>
            <Text className="meta-value">{project.details.period}</Text>
          </div>
          <div className="meta-item">
            <Text className="meta-label">担任角色:</Text>
            <Text className="meta-value">{project.details.role}</Text>
          </div>
        </div>

        <div className="project-intro">
          <Title level={4}>
            <AimOutlined /> 项目介绍
          </Title>
          <Paragraph>{project.details.intro}</Paragraph>

          <div className="tags-container">
            {project.details.tags.map((tag, index) => (
              <Tag key={index} color="blue">
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="project-tech">
          <Title level={4}>
            <BulbOutlined /> 技术实现与成果
          </Title>
          <List
            itemLayout="horizontal"
            dataSource={project.details.tech}
            renderItem={(item, index) => (
              <List.Item className="tech-list-item">
                <div style={{ display: "flex", width: "100%" }}>
                  <Text className="item-number">{index + 1}.</Text>
                  <Text className="tech-content">{item}</Text>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </Modal>
  );
};

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: (project: Project) => void;
}) => {
  const [animate, setAnimate] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card ${animate ? "animate" : ""}`}
      style={{
        backgroundImage: project.bgImage ? `url(${project.bgImage})` : "none",
        backgroundColor: project.darkColor,
      }}
      onClick={() => onClick(project)}
    >
      <div className="card-overlay"></div>
      <div className="project-content">
        <div className="project-header">
          <div className="project-title-area">
            <h3 className="project-name">{project.name}</h3>
            <Button
              shape="circle"
              icon={<ArrowRightOutlined />}
              className="view-button"
              onClick={(e) => {
                e.stopPropagation();
                onClick(project);
              }}
            />
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const userInfo = useContext(UserContext);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!userInfo?.projects?.length) return;

    const fetchScreenshots = async () => {
      const updatedProjects = userInfo.projects.map((project) => ({
        ...project,
        bgImage: `https://s0.wp.com/mshots/v1/${encodeURIComponent(
          project.link
        )}`,
      }));
      setProjects(updatedProjects);
    };

    fetchScreenshots();
  }, [userInfo]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  if (!userInfo) {
    return <div>加载中...</div>;
  }

  return (
    <div id="project" className="projects-container">
      <h2 className="section-title">项目展示</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>

      <ProjectDetailModal
        visible={modalVisible}
        project={selectedProject}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Projects;
