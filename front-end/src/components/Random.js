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
  const [mediaKeys, setMediaKeys] = useState([]);

  const randomTweets = (tweets, tweetImages) => {
    const results = Math.floor(Math.random() * tweets.length);
    //const imagesResults = Math.floor(Math.random() * tweetImages.length);
    setText(tweets[results].text);
    setFavorite(tweets[results].public_metrics.like_count);
    setRetweet(tweets[results].public_metrics.retweet_count);
    // IF random tweet has media keys
    const hasMediaKeys = tweets[results].attachments
      ? tweets[results].attachments.media_keys
      : null;
    if (hasMediaKeys) {
      // store the first media key in a variable
      const mediaKey = [tweets[results].attachments.media_keys[0]];
      //const imageKey = tweetImages.media_key;
      const matchingImage = tweetImages.filter(({ media_key }) =>
        mediaKey.includes(media_key)
      );

console.log('Images:', img)
      if (matchingImage[0].url) {
        // update img in state
        setImg(matchingImage[0].url);
      } else if (matchingImage[0].preview_image_url) {
        setImg(matchingImage[0].preview_image_url);
      } 
    }

      




    
  };

  // console.log("media_key from data:", mediaKeys);
  // console.log("media_key from images:", displayTweets);
  // console.log("img:", img);
  console.log("tweetImages:", tweetData);

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

  const nytimes = () => {
    if (setImg !== "") {
      setImg(null)
    }
    setrandomTweet("807095");
    handleSubmit("807095");
  };

  const villageVanguard = () => {
    if (setImg !== "") {
      setImg(null)
    }
    setrandomTweet("3410978867");
    handleSubmit("3410978867");
  };

  const barackObama = () => {
    if (setImg !== "") {
      setImg(null)
    }
    setrandomTweet("813286");
    handleSubmit("813286");
  };

  const jazzGallery = () => {
    if (setImg !== "") {
      setImg(null)
    }
    setrandomTweet("22140254");
    handleSubmit("22140254");
  };

  const Nasa = () => {
    if (setImg !== "") {
      setImg(null)
    }
    setrandomTweet("11348282");
    handleSubmit("11348282");
  };

  return (
    <div>
      <Navmenu />
      <div className="tweet-box">
        <h1></h1>
        <button onClick={nytimes}>
          <h1>The NewYork Times</h1>
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
            <img className="tweet-image" src={img ? img : null} />
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default RandomTweet;
