import About from "./About";
import Nav from "./Nav";
import "./index.scss";
import UserInfo from "@/User";
import UserContext from "@/context/UserContext";
const Home = () => {
  return (
    <div className="home">
      <UserContext.Provider value={UserInfo}>
        <Nav />
        <About />
      </UserContext.Provider>
    </div>
  );
};
export default Home;
