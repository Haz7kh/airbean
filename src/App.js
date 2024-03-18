import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Navbar from "./component/nav/Nav";
import topHead from "../src/imgs/toop.svg";
import bottom from "../src/imgs/bottom.svg";
function App() {
  return (
    <>
      <header className="header">
        <Navbar />
        <img src={topHead} alt="Header" />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <footer className="footer">
        <img src={bottom} alt="Footer" />
      </footer>
    </>
  );
}

export default App;
