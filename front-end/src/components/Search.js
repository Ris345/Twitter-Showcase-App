import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navmenu from "./Navmenu";
import Footer from "./Footer";
import axios from "axios";

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

  return (
    <div>
      <Navmenu />
      <Form onSubmit={updateForm}>
        <Form.Group className="mb-3">
          <Form.Label>Search Tweets</Form.Label>
          <Form.Control placeholder="Enter" onChange={updateForm} />
        </Form.Group>
      </Form>
      <button onClick={handleSubmit}>Search</button>
      <div></div>
      <Footer />
    </div>
  );
}

export default SearchPage;
