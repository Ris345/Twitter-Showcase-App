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
            You may be wondering what this box is doing here. Honestly, I wonder
            as well, but I want to show you the bigger picture. Let me ask you,
            what is your screen time? Probably a lot, and mine is too! This app
            is designed for folks like you who spend countless hours scrolling
            through mindless content. Maybe you're asking, is there a way to
            just see what you want without having to see irrelevant posts from
            strangers and famous people? But there is an easier way to browse
            Twitter now. You just have to search for the user you want to find
            and there you go. Why make things harder when they already are?
            Instead, let's make it easier. 𓅨 𓅔 𓅓 𓅊
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content;
