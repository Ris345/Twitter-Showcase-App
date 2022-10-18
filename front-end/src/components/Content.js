import React from "react";
import Card from "react-bootstrap/Card";

function Content() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>Twitter Showcase App</Card.Title>
        <Card.Text>
          Welcome to my Twitter Showcase App. You can spy on other Twitter users
          from here without worrying about to log in, is'nt that nice. I mean
          who wants to log in to a social media and view mindless posts that's
          going to make you feel bad. This is why I created this App for folks
          like you, look at what you want! no BS. Enjoy!!
        </Card.Text>
        <Card.Link>Tweet Tweet</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Content;
