import Github from "@/components/Github/index";
import About from "./About";
import Nav from "./Nav";
import "./index.scss";
import UserInfo from "@/User";
import UserContext from "@/context/UserContext";
import Skill from "./Skill";
const Home = () => {
  return (
    <div className="home">
      <UserContext.Provider value={UserInfo}>
        <Nav />
        <About />
        <Github />
        <Skill />
      </UserContext.Provider>
    </div>
  );
};
export default Home;
