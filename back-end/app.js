const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config();

//  gets tweets with regular search 
app.get("/api/tweets", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url: `https://api.twitter.com/1.1/search/tweets.json?q=${user}&src=typed_query&f=live&count=10&tweet_mode=extended`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
});

// gets random tweet from specified user
app.get("/api/tweets/random", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url:`https://api.twitter.com/2/users/${user}/tweets?tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,url`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});



// gets tweets based on the id of the user 
app.get("/api/tweets/idtweet", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url:`https://api.twitter.com/2/users/${user}/tweets?tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,url`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});



// user name with random id 
app.get("/api/tweets/randomid", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url: `https://api.twitter.com/2/users/${user}`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});


// get user to get the user id 
app.get("/api/tweets/userid", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url: `https://api.twitter.com/2/users/by/username/${user}`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

















app.listen(3001, () => {
  console.log(`Example pp listening on port 3001`);
});
