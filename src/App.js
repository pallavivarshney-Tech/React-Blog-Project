import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Bollywood from "./Components/Bollywood";
import Hollywood from "./Components/Hollywood";
import Technology from "./Components/Technology";
import Fitness from "./Components/Fitness";
import Tourism from "./Components/Tourism";
import Food from "./Components/Food";
import Blog from "./Components/Blog";
import { useLocation } from "react-router-dom";
// import Practice from "./Components/Practice";

function App() {
  const location = useLocation();
  console.log("Final page location", location);
  return (
    <>
      <div className="container">
        <Navbar />
        {/* <Practice/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/Bollywood" element={<Bollywood />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Fitness" element={<Fitness />} />
          {location.state !== null && (
            <Route path="/Blog" element={<Blog />} />
            
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;