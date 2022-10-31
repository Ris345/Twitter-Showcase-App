import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Random from "./components/Random";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./userContext";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [tweets, setTweets] = useState([]);
         
   
  useEffect(() => {
    axios
      .get("/api/tweets")
      .then((response) => setTweets(response.data.statuses));
  }, []);

  console.log("FROM APP.JS:", tweets);

  return (
    <UserContext.Provider value={tweets}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Random" element={<Random />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
