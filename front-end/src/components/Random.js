import React, { useContext } from "react";
import Navmenu from "./Navmenu";
import Footer from "./Footer";
import  UserContext  from "../userContext";

function RandomTweet() {
  const msg = useContext(UserContext);

  console.log("From Random:", msg);
  return (
    <div>
      <Navmenu />
      <h1>This is random tweet page.</h1>
      <Footer />
    </div>
  );
}

export default RandomTweet;
