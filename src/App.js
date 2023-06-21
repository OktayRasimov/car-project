import "./App.css";
import Home from "./components/RouterComponents/Home";
import About from "./components/RouterComponents/About/About";
import Vehicles from "./components/RouterComponents/Vehicles/Vechicles";
import { Route, Routes } from "react-router-dom";
import Team from "./components/RouterComponents/Team/Team";
import Contact from "./components/RouterComponents/Contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
