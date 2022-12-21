import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navmenu from "./Navmenu";
import Footer from "./Footer";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

function SearchPage() {
  const [userInput, setuserInput] = useState();
  const [tweets, setTweets] = useState({});
  const [username, setuserName] = useState([]);
  const [tweetsContent, setTweetscontent] = useState([]);
  const [img, setImg] = useState([]);
  const [text, setText] = useState([]);
  const [show, setShow] = useState(false);
  const [profImg, setprofImg] = useState([]);
  const [urlImg, seturlImg] = useState([]);
  const [prevImg, setprevImg] = useState([]);

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
    if (response.data.errors) {
      setShow(true);
      return;
    } else {
      setuserName(response.data.data.username);
    }

    const userId = response.data.data.id;
    const responses = await axios.get("api/tweets/idtweet", {
      params: {
        query: userId,
      },
    });
    if (responses.data.meta.result_count === 0 || responses.data.errors) {
      setShow(true);
      return;
    } else {
      setShow(false);
    }
    setTweets(responses.data);
    setText(responses.data ? responses.data.data : "");
    setImg(responses.data.includes ? responses.data.includes.media : []);
    setprofImg(responses.data.includes ? responses.data.includes.users : "");
    // check if tweet has media
    if (responses.data.includes.media) {
      for (let i = 0; i < responses.data.data.length; i++) {
        if (responses.data.data[i].attachments) {
          const hasMediaKeys = responses.data.data[i].attachments.media_keys[0];
          const imgFilt = responses.data.includes.media;
          const matchingImage = imgFilt.filter(({ media_key }) =>
            hasMediaKeys.includes(media_key)
          );
          console.log(matchingImage);
          // try running a for loop for the matchingIMage
          for (let i = 0; i < matchingImage.length; i++) {
            if (matchingImage[i].url) {
              seturlImg(matchingImage[i].url);
            } else {
              setprevImg(matchingImage[i].preview_image_url);
            }
          }
        } else {
          setprevImg(null);
          seturlImg(null);
        }
      }
    }
  };

  //console.log(img[0].url);

  const regularTweets = () => {
    axios
      .get("api/tweets", {
        params: {
          query: userInput,
        },
      })
      .then((response) => {
        setTweetscontent(response.data ? response.data.statuses : "");
        if (response.data.statuses.length < 1) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
  };

  const handleSubmit = () => {
    //clear old images
    if (urlImg || prevImg) {
      seturlImg("");
      setprevImg("");
    }
    // make sure user types something
    if (!userInput) {
      setShow(true);
      return;
    } else {
      setShow(false);
      //also check if the value entered is truthy
      if (userInput.match(/@([\w]+)/)) {
        userTweets();
      } else {
        regularTweets();
      }
    }
    // clear the screen before re-render
    if (tweetsContent) {
      setTweetscontent("");
    } else {
      setText("");
    }
  };

  // there is an image here so figure it out!
  const showuserTweets = Object.values(text).map((tweet, index) => {
    // const imgShow = tweet.attachments ? img[index].url : null;
    // const showImg = tweet.attchments ? img[index].preview_image_url : null;
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>
              {" "}
              <img alt="" src={profImg[0].profile_image_url}></img> {username}
            </Card.Title>
            <Card.Text>{tweet.text}</Card.Text>
            <Card.Text>
              ♡ {tweet.public_metrics.like_count} {"  "}⟳{" "}
              {tweet.public_metrics.retweet_count}
            </Card.Text>
          </Card.Body>
          {/* <img
            alt=""
            className="tweet-image"
            src={tweet.attachments ? imgShow : showImg}
          ></img> */}
        </Card>
      </div>
    );
  });

  // display for search keywords
  const showTweets = Object.values(tweetsContent).map((tweet, index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>
              {" "}
              {tweet.user.profile_image_url && (
                <img alt="" src={tweet.user.profile_image_url}></img>
              )}{" "}
              {tweet.user.name}
            </Card.Title>
            <Card.Text>{tweet.full_text}</Card.Text>
            <Card.Text>
              ♡ {tweet.favorite_count}
              {"  "}⟳{tweet.retweet_count}{" "}
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
            <div className="box-area">Search</div>
          </Form.Label>
          <Form.Control
            className="tweet-input"
            placeholder="Enter username starting with '@' or just keywords. "
            onChange={updateForm}
          />
        </Form.Group>
      </Form>
      <Button
        style={{ width: "20rem" }}
        className="search-button"
        onClick={handleSubmit}
        variant="outline-dark"
      >
        Search
      </Button>
      <div className="tweet-info">
        Users can search tweets based on content or user id. To search with id
        simply type @symbol infront of the username example @NASA or simply type
        the name of the user example Elon Musk to search by content.
      </div>
      {show && (
        <Alert
          className="error-box"
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>
            {" "}
            Oh No! 😞 0 results found please search for a valid username or
            keywords.
          </Alert.Heading>
        </Alert>
      )}
      {showuserTweets && <div>{showuserTweets}</div>}
      {showTweets && <div>{showTweets}</div>}
      <Footer />
    </div>
  );
}

export default SearchPage;
