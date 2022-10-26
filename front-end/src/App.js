import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Random from "./components/Random";
import { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    axios.get("/api/tweets").then((response) => console.log(response));
  }, []);
  
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Search" element={<Search />}></Route>
      <Route path="/Random" element={<Random />}></Route>
    </Routes>
  );
}

export default App;

