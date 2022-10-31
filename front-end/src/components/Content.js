import React from "react";
import Card from "react-bootstrap/Card";

function Content() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>Twitter Showcase App</Card.Title>
        <Card.Text>
          Welcome to my Twitter Showcase App
          
        </Card.Text>
        <Card.Link> Tweet </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Content;



