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
  const [tweets, setTweets] = useState([]);
  const [username, setuserName] = useState([]);
  const [tweetsContent, setTweetscontent] = useState([]);
  const [img, setImg] = useState([]);
  const [text, setText] = useState([]);
  const [urlImg, seturlImg] = useState([]);
  const [previewImages, setpreviewImages] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setErrors] = useState([]);
  const [profImg, setprofImg] = useState([]);

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

    if (response.data.errors) {
      setShow(true);
      return;
    } else {
      setuserName(response.data.data.name);
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
    setImg(responses.data.includes ? responses.data.includes.media : "");
    setprofImg(responses.data.includes ? responses.data.includes.users : "");
  };

  const regularTweets = () => {
    debugger;
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

  //console.log(Object.values(tweets).length);
  // const showAlldata = Object.values(tweets).map((item, index) => {
  //   <div>
  //     <p>{tweets.item}</p>
  //   </div>;
  // });

  // const tweetImages = Object.values(img).map((tweet, index) => {
  //   return (
  //     <div key={index}>
  //       <img
  //         src={tweet.url ? tweet.url : tweet.preview_image_url}
  //       ></img>
  //     </div>
  //   );
  // })

  // const unPacktweets = Object.values(tweets)
  // console.log(unPacktweets[1].media.preview_image_url);

  //   const unpackImg = ([...Object.values(img)]);
  //  console.log(unpackImg)
  // const test = Object.values(tweets).map((tweet, index) => {
  //   return (
  //     <div key={index}>
  //       <p></p>
  //     </div>
  //   );
  // });

  // there is a image here so figure it out!
  const showuserTweets = Object.values(text).map((tweet, index) => {
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
              🤍 {tweet.public_metrics.like_count} {"  "}
              {tweet.public_metrics.retweet_count}
            </Card.Text>
            <Card.Text>
              <img
                alt=""
                className="tweet-image"
                src={tweet.attachments ? "there is a image here" : ""}
              ></img>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  // there will be no images from the keywords search so don't bother.
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
              🤍 {tweet.favorite_count}
              {"  "}
              {tweet.retweet_count}{" "}
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
            <Card className="user-body" style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Text>
                  Users can search tweets based on content or user id. To search
                  with id simply type @symbol infront of the username example
                  @NASA or simply type the name of the user example Elon Musk to
                  search by content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Form.Label>
          <Form.Control
            className="tweet-input"
            placeholder="Enter username starting with '@' or just keywords. "
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
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
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

{
  /* <Card.Text>{tweet.attachments ? Object.values(img).map((tweet, index) => {
    return (
      <div key={index}>
        {tweet.url && <img src={tweet.url}></img>}
        {tweet.preview_image_url && <img src={tweet.preview_image_url}></img>}
      </div>
    );
  }): ""}</Card.Text>
          </Card.Body>
        </Card> */
}

{
  /* <Card.Text>{tweet.attachments && Object.values(img).map((tweet, index) => {
    return (
      <div key={index}>
        <img
          src={tweet.attachments ? (tweet.url ?  tweet.url : tweet.preview_image_url) : ""}
        ></img>
      </div>
    );
  })}</Card.Text> */
}
{
  /* // tweet.attachments ?  look up the image and display it  show empty div  */
}
