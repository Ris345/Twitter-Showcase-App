import Navmenu from "./Navmenu";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function RandomTweet() {
  const [randomTweet, setrandomTweet] = useState({});
  const [incoming, setIncoming] = useState([]);
  const [displayTweets, setdisplayTweets] = useState([]);
  const [user, setUser] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [text, setText] = useState([]);
  const [retweet, setRetweet] = useState([]);
  const [tweetData, settweetData] = useState([]);
  const [img, setImg] = useState([]);
  const [mediaKey, setmediaKey] = useState([])

  function randomTweets(tweets, tweetImages) {
    const results = Math.floor(Math.random() * tweets.length);
    const imagesResults = Math.floor(Math.random() * tweetImages.length);
    setText(tweets[results].text);
    setFavorite(tweets[results].public_metrics.like_count);
    setRetweet(tweets[results].public_metrics.retweet_count);
    setmediaKey([tweets[results].attachments.media_keys])
    setdisplayTweets([tweetImages[imagesResults].media_key])
    if (mediaKey) {
      if (mediaKey === displayTweets) {
         console.log('testing 123')
      } else {
         console.log('media keys does not match')
       }
    }
    
    const array = Object.keys(tweetImages[imagesResults]);
    return array.includes("url")
      ? setImg(tweetImages[imagesResults].url)
      : setImg(tweetImages[imagesResults].preview_url);
   
  }

  console.log("media_key from data:" , mediaKey)
  console.log("media_key from images:", displayTweets)


  
  const handleSubmit = (twitterHandle) => {
    axios
      .get("api/tweets/random", {
        params: {
          query: twitterHandle,
        },
      })
      .then((response) => {
        const tweets = response.data.data;
        const tweetImages = response.data.includes.media
          ? response.data.includes.media
          : "";
        const random = randomTweets(tweets, tweetImages);
        setIncoming(tweets);
        settweetData(tweetImages);
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

  //console.log(tweetData);

  const newYorkTimes = () => {
    setrandomTweet("807095");
    handleSubmit("807095");
  };

  const villageVanguard = () => {
    setrandomTweet("3410978867");
    handleSubmit("3410978867");
  };

  const barackObama = () => {
    setrandomTweet("813286");
    handleSubmit("813286");
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
        <h1></h1>
        <button onClick={newYorkTimes}>
          <h1>The New York Times</h1>
        </button>
        <button onClick={villageVanguard}>
          {" "}
          <h1>The Village Vanguard</h1>
        </button>
        <button onClick={barackObama}>
          {" "}
          <h1>Barack Obama</h1>
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
            <img
              className="tweet-image"
              src={img ? img : null}
            />
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default RandomTweet;
