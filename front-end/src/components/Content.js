import React from "react";
import Card from "react-bootstrap/Card";
import flybird from "../homepic/flybird.jpg";
import "../App.css";

function Content() {
  return (
    <div>
      <img alt="" className="fly-bird" src={flybird}></img>
      <Card
        className="other-body"
        text="light"
        style={{ width: "40rem", height: "30rem" }}
      >
        <Card.Body className="intro-flybird">
          <Card.Text>
            <h1>Hello! Welcome to the flybird app!</h1>
           You may be wondering what is this box doing here....? Honestly I
           wonder as well...but I want to show you the bigger picture. Let me
           ask you what is your screen time? Probably a lot and so is mine!
           This app is designed for folks like you who spend countless hours
           scrolling through mindless content, maybe you ask is there a way to
           just see what you want without having to see irrelevant posts from
           strangers and famous people. But there is a easier way to browse twitter
           now and just check the tweets for the users you want. It's that easy
           you just have to search for the user you want to find and there you
           go. Why make things harder when they already are, instead lets make
           it's easier. 𓅨 𓅔 𓅓 𓅊
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content;
