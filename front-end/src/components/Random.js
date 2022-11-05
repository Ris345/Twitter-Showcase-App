import Navmenu from "./Navmenu";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";

function RandomTweet() {
  const [randomTweet, setrandomTweet] = useState("");
  const [incoming, setIncoming] = useState();
  const [displaytweets, setdisplayTweets] = useState();

  function randomTweets(tweets) {
    const results = Math.floor(Math.random() * tweets.length);
    setdisplayTweets(tweets[results]);

  }

console.log()

  const handleSubmit = (twitterHandle) => {
  
    axios
      .get("api/tweets/random", {
        params: {
          query: twitterHandle,
        },
      })
      .then((response) => {
        const tweets = response.data.statuses;
        const random = randomTweets(tweets);
        setIncoming(response.data.statuses);
      });
  };



  const newYorkTimes = () => {
    setrandomTweet("@nytimes");
    handleSubmit("@nytimes");
  };

  const villageVanguard = () => {
    setrandomTweet("@vanguardjazz");
    handleSubmit("@vanguardjazz");
  };

  const sunHouse = () => {
    setrandomTweet("@SunhouseInc");
    handleSubmit("@SunhouseInc");
  };

  const jazzGallery = () => {
    setrandomTweet("@TheJazzGallery");
    handleSubmit("@TheJazzGallery");
  };

  const Nasa = () => {
    setrandomTweet("@nasa");
    handleSubmit("@nasa");
  };

  //console.log(" randomTweet: ", randomTweet);

  return (
    <div>
      <Navmenu />
      <div className="tweet-box">
        <h1>...</h1>
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
      <div className="display-area"> ..</div>
      <Footer />
    </div>
  );
}

export default RandomTweet;
