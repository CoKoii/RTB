import { createContext } from "react";
interface UserContextType {
  name: string;
  phone: string;
  email: string;
  photo: string;
  age: number;
  gender: string;
  experience: string;
  status: string;
  job: string;
  about: string[]; // 新增个人简介数组
  education: {
    school: string;
    major: string;
    degree: string;
    time: {
      start: string;
      end: string;
    };
    description: string[];
  };
  skills: {
    mainSkills: {
      name: string;
      level: number;
      gradient: string;
    }[];
    descriptions: string[];
  };
  workExperiences: {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string[];
    location: {
      address: string;
      coordinates: string; // 经度,纬度
    };
  }[];
  // 新增项目相关的类型定义
  projects: {
    id: number;
    name: string;
    status: string;
    description: string;
    darkColor: string;
    coverImage?: string;
    link: string;
    bgImage?: string;
    details: {
      intro: string;
      tech: string[];
      tags: string[];
      period: string;
      role: string;
    };
  }[];
}

const UserContext = createContext<UserContextType | null>(null);
export default UserContext;
