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
  const [userId, setuserId] = useState(null);
  const [tweetsId, setTweetsid] = useState();
  const [tweetsContent, setTweetscontent] = useState([]);
  const [img, setImg] = useState([]);
  const [text, setText] = useState([]);

  const updateForm = (e) => {
    e.preventDefault();
    setuserInput(e.target.value);
  };

  const userTweets = async () => {
    debugger;
    const response = await axios.get("api/tweets/userid", {
      params: {
        query: userInput.slice(1),
      },
    });
    const userId = response.data.data.id;
    const responses = await axios.get("api/tweets/idtweet", {
      params: {
        query: userId,
      },
    });
    setTweets(responses.data);
    setText(responses.data.data);
    const media = responses.data.includes
      ? responses.data.includes.media
      : null;
    setImg(media);
    // isTweetTruthy();
  };

  const regularTweets = () => {
    axios
      .get("api/tweets", {
        params: {
          query: userInput,
        },
      })
      .then((response) => setTweetscontent(response.data.statuses));
    // isTweetTruthy();
  };

  const handleSubmit = () => {
    //also check if the value entered is truthy
    if (userInput.match(/@([\w]+)/)) {
      userTweets();
    } else {
      regularTweets();
    }

  };

  // console.log("From Search:", username);

  // console.log("From Search:", text);

  console.log("From Search:", img);

  // const isTweetTruthy = () => {
  //   if (tweetsContent.length === 0 || tweets.length === 0) {
  //     alert(
  //       "Tweet not found, try again with a different username or content name"
  //     );
  //   } else {
  //      return
  //   }
  // };

  // const displayText = () => {
  //   displayImages();
  //   for (let i = 0; i < text.length; i++) {
  //     const twitterText = text[i].text;
  //     //console.log(twitterText);
  //   }
  // };

  // const displayImages = () => {
  //   for (let i = 0; i < img.length; i++) {
  //     if (img[i].url) {
  //       //console.log(img[i].url);
  //     } else {
  //       // console.log(img[i].preview_image_url);
  //     }
  //   }
  // };

  //console.log("From Search:", tweetsId);

  // const convertTweetObject = [...Object.values(tweets)];

  // console.log(convertTweetObject)

  // // function unPack() {
  // //   setTweets((prevTweets) => {
  // //     return {
  // //       ...prevTweets,
  // //       key: convertTweetObject,
  // //     };
  // //   });
  // // }

  //

  // function getMedia() {
  //   for (let i = 0; i < tweets.includes.media.length; i++) {
  //     if (tweets.includes.media[i].url) {
  //       console.log(tweets.includes.media[i].url)
  //     } else {
  //       console.log(tweets.includes.media[i].preview_image_url)
  //     }

  //   }
  // }

  //console.log(tweets.includes.media[0].preview_image_url)

  //const convertTweetObject = [...Object.values(text)];
  // //const convertMediaObject = [...Object.values(tweets.includes)]
  // console.log(convertTweetObject);
  // console.log(convertTweetObject);
  //console.log(convertMediaObject)

  // const showuserTweets = convertTweetObject.map((text, index) => {
  //   return (
  //     <div key={index}>
  //       <Card className="tweet-body">
  //         <Card.Body>
  //           <Card.Title>{text.text}</Card.Title>
  //           <Card.Text>{text.like_count}</Card.Text>
  //           <Card.Text>{text.retweet_count}</Card.Text>
  //         </Card.Body>
  //       </Card>
  //     </div>
  //   );
  // });

  // const test  = Object.values(tweets).map((tweet, index) => {
  //   return (
  //     <div key={index}>
  //     <Card className="tweet-body">
  //       <Card.Body>
  //         <Card.Title>{}</Card.Title>
  //         {/* <Card.Text>{text.like_count}</Card.Text>
  //         <Card.Text>{text.retweet_count}</Card.Text> */}
  //       </Card.Body>
  //     </Card>
  //   </div>
  //   )

  console.log("mainData:", tweets);
  // const showuserTweetsbyID = img.map(({ url }) => url);
  // console.log(showuserTweetsbyID);

  const showuserTweets = Object.values(text).map((tweet, index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>{tweet.text}</Card.Title>
            <Card.Text>
              {tweet.public_metrics.like_count}{" "}
              {tweet.public_metrics.retweet_count}
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  //const convertObject = [...Object.values(tweetsContent)];
  const showTweets = Object.values(tweetsContent).map((tweet, index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>{tweet.user.name}</Card.Title>
            <Card.Text>{tweet.created_at.toLocaleString("en-US")}</Card.Text>
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
            id simply type @ infront of the username example - @NASA.
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
