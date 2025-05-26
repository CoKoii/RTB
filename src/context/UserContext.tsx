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
}

const UserContext = createContext<UserContextType | null>(null);
export default UserContext;
