import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navmenu from "./Navmenu";
import Footer from "./Footer";

function SearchPage() {
  const [userInput, setuserInput] = useState("");
  const updateForm = (e) => {
    e.preventDefault();
    setuserInput(e.target.value);
  };

  console.log(userInput);
  return (
    <div>
      <Navmenu />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search Tweets</Form.Label>
          <Form.Control placeholder="Enter" onChange={updateForm} />
        </Form.Group>
      </Form>
      <div>{userInput}</div>
      <Footer/>
    </div>
  );
}

export default SearchPage;
