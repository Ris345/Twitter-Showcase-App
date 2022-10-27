import React from "react";
import Content from "./Content";
import Navmenu from "./Navmenu";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get("/api/tweets").then((response) => setTweets(response.data));
  }, []);

  console.log(tweets);

  return (
    <div>
      <Navmenu/>
      <Content  />
      <Footer tweets={tweets} />
    </div>
  );
}

export default Home;


