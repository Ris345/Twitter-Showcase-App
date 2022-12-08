import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navmenu from "./Navmenu";
import Footer from "./Footer";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SearchPage() {
  const [userInput, setuserInput] = useState();
  const [tweets, setTweets] = useState([]);
  const [username, setuserName] = useState([]);
  const [tweetsContent, setTweetscontent] = useState([]);
  const [img, setImg] = useState([]);
  const [text, setText] = useState([]);
  const [urlImg, seturlImg] = useState([]);
  const [previewImages, setpreviewImages] = useState([]);

  const updateForm = (e) => {
    e.preventDefault();
    setuserInput(e.target.value);
  };

  const userTweets = async () => {
    const response = await axios.get("api/tweets/userid", {
      params: {
        query: userInput.slice(1),
      },
    });
    const user = response.data.data.name;
    setuserName(user);
    const userId = response.data.data.id;
    const responses = await axios.get("api/tweets/idtweet", {
      params: {
        query: userId,
      },
    });
    setTweets(responses.data);
    setText(responses.data.data);
    const media = (await responses.data.includes)
      ? responses.data.includes.media
      : null;
    setImg(media);
  };

  const regularTweets = () => {
    axios
      .get("api/tweets", {
        params: {
          query: userInput,
        },
      })
      .then((response) => setTweetscontent(response.data.statuses));
  };

  const handleSubmit = () => {
    //also check if the value entered is truthy
    if (userInput.match(/@([\w]+)/)) {
      userTweets();
    } else {
      regularTweets();
    }
  };

  const tweeter = Object.values(tweets)
  console.log(tweeter)




console.log(img)




  const showuserTweets = Object.values(text).map((tweet,index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Text>{username}</Card.Text>
            <Card.Title>{tweet.text}</Card.Title>
            <Card.Text>
              ❤️{tweet.public_metrics.like_count}{" "}
              {tweet.public_metrics.retweet_count}
            </Card.Text>
            {/* {urlImg && <img src={urlImg}></img>}
            {previewImages && <img src={previewImages}></img>} */}
            {Object.values(img).map((tweet,index) => {
              return (
                <div key={index}>
                    <img
                  src={tweet.url ? tweet.url : tweet.preview_image_url}
                  >      
                </img>
                </div> 
              );
            })}
          </Card.Body>
        </Card>
      </div>
    );
  });

  const showTweets = Object.values(tweetsContent).map((tweet, index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>{tweet.user.name}</Card.Title>
            <Card.Text>{tweet.full_text}</Card.Text>
            <Card.Text>
              {tweet.retweet_count.toLocaleString("en-US")}{" "}
              {tweet.favorite_count.toLocaleString("en-US")}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <Navmenu />
      <Form onSubmit={updateForm}>
        <Form.Group className="mb-3">
          <Form.Label>
            Users can search tweets based on content or user id. To search with
            id simply type @ symbol infront of the username example @NASA
          </Form.Label>
          <Form.Control
            className="tweet-input"
            placeholder="Enter"
            onChange={updateForm}
          />
        </Form.Group>
      </Form>
      <Button
        className="search-button"
        onClick={handleSubmit}
        variant="outline-dark"
      >
        Search
      </Button>
      {showuserTweets && <div>{showuserTweets}</div>}
      {showTweets && <div>{showTweets}</div>}
      <Footer />
    </div>
  );
}

export default SearchPage;

// if (media) {
//   if (img) {
//     for (let i = 0; i < media.length; i++) {
//       if (tweets.includes.media[i].url) {
//         seturlImg(tweets.includes.media[i].url);
//         console.log(tweets.includes.media[i].url);
//       } else {
//         setpreviewImages(tweets.includes.media[i].preview_image_url);
//         console.log(tweets.includes.media[i].preview_image_url);
//       }
//     }
//   }
// }

// if (img)
//   const showTweetimages = Object.values(img).map((tweet, index) => {
//     return (
//       <div>
//         <img src ={tweet.url ? tweet.url : tweet.preview_image_url}></img>
//           </div>
//     )
// })
