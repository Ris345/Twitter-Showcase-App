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

  const updateForm = (e) => {
    e.preventDefault();
    setuserInput(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get("api/tweets", {
        params: {
          query: userInput,
        },
      })
      .then((response) => setTweets(response.data.statuses));
  };

  console.log("From Search:", tweets);

  const convertObject = [...Object.values(tweets)];

  const showTweets = convertObject.map((tweet, index) => {
    return (
      <div key={index}>
        <Card className="tweet-body">
          <Card.Body>
            <Card.Title>{tweet.user.name}</Card.Title>
            <Card.Text>{tweet.created_at.toLocaleString('en-US')}</Card.Text>
            <Card.Text>{tweet.full_text}</Card.Text>
            <Card.Text>{tweet.favorite_count.toLocaleString('en-US')}</Card.Text>
            <Card.Text>{tweet.retweet_count.toLocaleString('en-US')}</Card.Text>
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
          <Form.Label>Search Tweets</Form.Label>
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
