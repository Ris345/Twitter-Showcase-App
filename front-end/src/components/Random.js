import Navmenu from "./Navmenu";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";
import OBAMA from "../profilepics/OBAMA.jpg";
import NASA from "../profilepics/NASA.jpg";
import NYTimes from "../profilepics/NYTimes.png";
import VillageVanguard from "../profilepics/VillageVanguard.jpg";
import JazzGallery from "../profilepics/JazzGallery.jpg";
import Alert from "react-bootstrap/Alert";

function RandomTweet() {
  const [randomTweet, setrandomTweet] = useState({});
  const [incoming, setIncoming] = useState([]);
  const [user, setUser] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [text, setText] = useState([]);
  const [retweet, setRetweet] = useState([]);
  const [tweetData, settweetData] = useState([]);
  const [img, setImg] = useState([]);
  const [show, setShow] = useState(false);
  const [profImg, setprofImg] = useState([]);

  const randomTweets = (tweets, tweetImages) => {
    if (img) {
      setImg(null);
    }
    const results = Math.floor(Math.random() * tweets.length);
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

      if (matchingImage[0].url) {
        // update img in state
        setImg(matchingImage[0].url);
      } else if (matchingImage[0].preview_image_url) {
        setImg(matchingImage[0].preview_image_url);
      } else {
        setImg(null);
      }
    }
  };

  console.log(randomTweet)
  console.log(incoming)
  console.log(tweetData)


  const handleSubmit = (twitterHandle) => {
    setShow(true);
    axios
      .get("https://twitterapp-nfle.onrender.com/api/tweets/random", {
        params: {
          query: twitterHandle,
        },
      })
      .then((response) => {
        const tweets = response.data.data;
        const tweetImages = response.data.includes
          ? response.data.includes.media
          : null;
        const random = randomTweets(tweets, tweetImages);
        console.log(random)
        setIncoming(tweets);
        settweetData(tweetImages);
        setprofImg(response.data.includes.users[0].profile_image_url);
        setUser(response.data.includes.users[0].username);
      });

    axios
      .get("api/tweets/randomid", {
        params: {
          query: twitterHandle,
        },
      })
      .then((response) => {});
  };

  const nytimes = () => {
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
        <img
          alt=""
          className="random-images"
          src={NYTimes}
          onClick={nytimes}
        ></img>
        <img
          alt=""
          src={VillageVanguard}
          className="random-images"
          onClick={villageVanguard}
        ></img>
        <img
          alt=""
          className="random-images"
          src={OBAMA}
          onClick={barackObama}
        ></img>
        <img
          alt=""
          src={JazzGallery}
          className="random-images"
          onClick={jazzGallery}
        ></img>
        <img alt="" src={NASA} className="random-images" onClick={Nasa}></img>
      </div>
      <div></div>
      <Footer />
      {show && (
        <Alert
          className="alert-box"
          variant="light"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>
            <img alt="" src={profImg}></img> {user}
          </Alert.Heading>
          <p>{text}</p>
          <img alt="" className="tweet-image" src={img ? img : null} />
          <p>
            {" "}
            ♡{favorite} ⇆{retweet}
          </p>
        </Alert>
      )}
    </div>
  );
}

export default RandomTweet;
