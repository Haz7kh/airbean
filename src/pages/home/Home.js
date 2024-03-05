import "./home.css";
import header from "../../imgs/header.svg";
import headerR from "../../imgs/header-r.svg";
import Logo from "../../imgs/logo.svg";
import info from "../../imgs/text.png";
const Home = () => {
  return (
    <div className="container">
      <img src={header} alt="left decoration" className="left-decoration" />
      <img src={headerR} alt="right decoration" className="right-decoration" />
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
        <img src={info} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Home;
