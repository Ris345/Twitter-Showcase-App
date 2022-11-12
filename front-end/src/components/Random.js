import Navmenu from "./Navmenu";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function RandomTweet() {
  const [randomTweet, setrandomTweet] = useState({});
  const [incoming, setIncoming] = useState([]);
  const [displaytweets, setdisplayTweets] = useState([]);
  const [user, setUser] = useState([]);
  const [twitterHandle, settwitterHandle] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [text, setText] = useState([]);
  const [retweet, setRetweet] = useState([]);
  const [img, setImg] = useState([]);

  function randomTweets(tweets) {
    console.log(tweets)
    const results = Math.floor(Math.random() * tweets.length);
    setText(tweets[results].text);
    setUser(tweets[results].screen_name);
    setFavorite(tweets[results].favorite_count);
    setRetweet(tweets[results].retweet_count);
    settwitterHandle(tweets[results].user.screen_name);
    return tweets[results];
  }

  console.log("retweets", retweet);
  console.log("users", user);
  console.log("favorites", favorite);
  console.log("text", text);

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
        setIncoming(tweets);
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
      <div>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>
              {user} {twitterHandle}
            </Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Text>
              {favorite} {retweet}
            </Card.Text>
            <Card.Link></Card.Link>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default RandomTweet;
