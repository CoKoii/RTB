import About from "./About";
import Nav from "./Nav";
import "./index.scss";
import UserInfo from "@/User";
const Home = () => {
  return (
    <div className="home">
      <Nav user={UserInfo} />
      <About />
    </div>
  );
};
export default Home;
