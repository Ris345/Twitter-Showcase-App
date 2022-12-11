import React from "react";
import Card from "react-bootstrap/Card";
import flybird from "../homepic/flybird.jpg"
import "../App.css"; 

function Content() {
  return (
    <div>
       <img className="fly-bird" src={flybird}></img>
       <Card
      className="card-body"
      bg="info"
      text="light"
      style={{ width: "40rem", height: "30rem" }}
    >
      <Card.Body>
        <Card.Title>flybird </Card.Title>
        <Card.Text>You maybe wandering what the heck is this box doing?
          Honestly I wander as well...but I want to show you the bigger picture. 
          Let me ask you what is your screen time?  probably a lot and so is mine. 
          This app is designed for folks like ya'll who spend countless hours
          scrolling through mindless content, maybe you ask is there a way to just see what you want
          without having to see irrelavant posts from starngers and bots. 
          But there  is a easier way to 
          go to twitter now and just check the tweets for the users you want.
          It's that easy you just have to search for the user you want to find and there you go.
          Why make things harder when they already are, instead lets make it easier. 
          Welcome to the flybird app! 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
   
  
  );
}

export default Content;
