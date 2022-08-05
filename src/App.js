import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Price from "./Components/price";
import Schedule from "./Components/schedule";
import Navbar from "./Components/navbar";
import Contact from "./Components/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
