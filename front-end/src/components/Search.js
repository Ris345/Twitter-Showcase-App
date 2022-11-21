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
  const [tweetsContent, setTweetscontent] = useState();

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
    const userId = response.data.data.id;
    const responses = await axios.get("api/tweets/idtweet", {
      params: {
        query: userId,
      },
    });
    setTweets(responses.data);
  };

  const regularTweets = () => {
    axios
      .get("api/tweets", {
        params: {
          query: userInput,
        },
      })
      .then((response) => setTweets(response.data.statuses));
  };

  const handleSubmit = () => {
    if (userInput.includes("@")) {
      userTweets();
    } else {
      regularTweets();
    }
  };

  console.log("From Search:", username);

  console.log("From Search:", tweets);

  //console.log("From Search:", tweetsId);

  const convertObject = [...Object.values(tweets)];

  const showTweets = convertObject.map((tweet, index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>{tweet.user.name}</Card.Title>
            <Card.Text>{tweet.created_at.toLocaleString("en-US")}</Card.Text>
            <Card.Text>{tweet.text}</Card.Text>
            <Card.Text>
              {tweet.favorite_count.toLocaleString("en-US")}
            </Card.Text>
            <Card.Text>{tweet.retweet_count.toLocaleString("en-US")}</Card.Text>
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
      <div>{showTweets}</div>
      <Footer />
    </div>
  );
}

export default SearchPage;
