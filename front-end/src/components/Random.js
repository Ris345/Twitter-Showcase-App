import Navmenu from "./Navmenu";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";

function RandomTweet() {
  const [randomTweet, setrandomTweet] = useState();
  const [incoming, setIncoming] = useState();

  const handleSubmit = () => {
    axios
      .get("api/tweets/random", {
        params: {
          query: randomTweet,
        },
      })
      .then((response) => setIncoming(response.data.statuses));
  };

  console.log(incoming);


  const newYorkTimes = () => {
    setrandomTweet("@nytimes");
    handleSubmit();
  };

  const villageVanguard = () => {
    setrandomTweet("@vanguardjazz");
    handleSubmit();
  };

  const sunHouse = () => {
    setrandomTweet("@SunhouseInc");
    handleSubmit();
  };

  const jazzGallery = () => {
    setrandomTweet("@TheJazzGallery");
    handleSubmit();
  };

  const Nasa = () => {
    setrandomTweet("@nasa");
    handleSubmit();
  };

  console.log(" randomTweet: ", randomTweet);

  return (
    <div>
      <Navmenu />
      <div className="tweet-box">
      <h1>Random Tweets</h1>
      <button onClick={newYorkTimes}>
        <h1>The New York Times</h1>
      </button>
      <button onClick={villageVanguard}>
        {" "}
        <h1>The Village Vanguard</h1>
      </button>
      <button onClick={sunHouse}>
        {" "}
        <h1>Sunhouse</h1>
      </button>
      <button onClick={jazzGallery}>
        {" "}
        <h1>The Jazz Gallery</h1>
      </button>
      <button onClick={Nasa}>
        {" "}
        <h1>NASA</h1>
      </button>
      </div>
      <div className="display-area"> Tweet Display Area</div>
      <Footer />
    </div>
  );
}

export default RandomTweet;
