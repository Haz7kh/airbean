import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
