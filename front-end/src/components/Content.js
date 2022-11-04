import React from "react";
import Card from "react-bootstrap/Card";

function Content() {
  return (
    <Card
      className="card-body"
      bg="info"
      text="light"
      style={{ width: "40rem", height: "30rem" }}
    >
      <Card.Body>
        <Card.Title>Twitter Showcase App</Card.Title>
        <Card.Text>You maybe wandering what the heck is this box doing?
          Honestly I wander as well...but I want to show you the bigger picture. 
        </Card.Text>
        <Card.Link></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Content;
