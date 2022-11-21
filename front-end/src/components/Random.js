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
  const [favorite, setFavorite] = useState([]);
  const [text, setText] = useState([]);
  const [retweet, setRetweet] = useState([]);
  const [tweetData, settweetData] = useState([]);

  function randomTweets(tweets) {
    const results = Math.floor(Math.random() * tweets.length);
    setText(tweets[results].text);
    setFavorite(tweets[results].public_metrics.like_count);
    setRetweet(tweets[results].public_metrics.retweet_count);
    return tweets[results];
  }

  // console.log("retweets", retweet);
  // console.log("users", user);
  // console.log("favorites", favorite);
  // console.log("text", text);


  console.log("Random:", displaytweets);

  const handleSubmit = (twitterHandle) => {
    axios
      .get("api/tweets/random", {
        params: {
          query: twitterHandle,
        },
      })
      .then((response) => {
        const tweets = response.data.data;
        const random = randomTweets(tweets);
        setIncoming(tweets);
        settweetData(response.data);
      });

    axios
      .get("api/tweets/randomid", {
        params: {
          query: twitterHandle,
        },
      })
      .then((response) => {
        setUser(response.data.data.name);
      });
  };

  console.log(tweetData);

  const newYorkTimes = () => {
    setrandomTweet("807095");
    handleSubmit("807095");
  };

  const villageVanguard = () => {
    setrandomTweet("3410978867");
    handleSubmit("3410978867");
  };

  const elonMusk = () => {
    setrandomTweet("44196397");
    handleSubmit("44196397");
  };

  const jazzGallery = () => {
    setrandomTweet("22140254");
    handleSubmit("22140254");
  };

  const Nasa = () => {
    setrandomTweet("11348282");
    handleSubmit("11348282");
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
        <button onClick={elonMusk}>
          {" "}
          <h1>ElonMusk</h1>
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
            <Card.Title>{user}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Text>
              {favorite} {retweet}{" "}
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
