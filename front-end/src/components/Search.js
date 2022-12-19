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
  const [urlImg, seturlImg] = useState();
  const [previewImg, setpreviewImg] = useState();

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
    // for (let i = 0; i < responses.data.data.length; i++){
    //   const checkMedia = responses.data.data[i].attachments.media_keys[0]
    //   for (let j = 0; j < responses.data.includes.media.length; j++){
    //     if (checkMedia === responses.data.includes.media[j].media_key) {
    //       //setTest(responses.data.includes.media[j].url ? responses.data.includes.media[j].url : responses.data.includes.media[j].preview_image_url)
    //       if (responses.data.includes.media[j].url) {
    //         seturlImg(responses.data.includes.media[j].url)
    //       } else {
    //          setpreviewImg(responses.data.includes.media[j].preview_image_url)
    //       }
    //     }
    //   }
    // }
  };

  // console.log('urlImg:', urlImg)

  // console.log('previewImg:' , previewImg)

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

  //   const unPack = (Object.values(tweets))

  //   //console.log(Object.values(tweets).length);
  //   const showAlldata = Object.values(unPack).flatMap((item, index) => {
  //     <div key={index}>
  //       <p>{item.text}</p>
  //     </div>;
  //   });

  // console.log(showAlldata)

  // const tweetImages = Object.values(img).flatMap((tweet, index) => {
  //   return (
  //     <div key={index}>
  //       <img alt="" className="tweet-image"
  //         src={tweet.media_keys ? tweet.url : tweet.preview_image_url}
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

  // const imgObj = (tweets.includes.media)
  // const { media_key } = imgObj
  // console.log(media_key)

  // there is an image here so figure it out!
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
          </Card.Body>
          {/* <img alt="" src={tweet.attachments ? urlImg : previewImg ? !tweet.attachments : ""}> */}
          {/* </img> */}
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
