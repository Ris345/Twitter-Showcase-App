import React from "react";
import Card from "react-bootstrap/Card";
import flybird from "../homepic/flybird.jpg";
import "../App.css";

function Content() {
  return (
    <div>
      <img alt="" className="fly-bird" src={flybird}></img>
      <Card
        className="card-body"
        text="light"
        style={{ width: "40rem", height: "30rem" }}
      >
        <Card.Body className="intro-flybird">
          <Card.Text>
          You may be wondering what the heck is this box doing? Honestly I
           wander as well...but I want to show you the bigger picture. Let me
           ask you what is your screen time? probably a lot and so is mine.
           This app is designed for folks like you who spend countless hours
           scrolling through mindless content, maybe you ask is there a way to
           just see what you want without having to see irrelevant posts from
           strangers and famous people. But there is a easier way to browse twitter
           now and just check the tweets for the users you want. It's that easy
           you just have to search for the user you want to find and there you
           go. Why make things harder when they already are, instead lets make
           it's easier.
           Welcome to the fly bird app!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content;
