import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Random from "./components/Random";
import { Routes, Route } from "react-router-dom";


function App() {
 
  
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Random" element={<Random />}></Route>
      </Routes>
  );
}

export default App;
