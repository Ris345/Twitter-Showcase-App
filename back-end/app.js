const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config();

app.get("/api/tweets", (req, res) => {
  const user = req.query.query;
  console.log(user);
  const options = {
    method: "GET",
    url: `https://api.twitter.com/1.1/search/tweets.json?q=${user}`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
      "User-Agent": "v2RecentSearchJS",
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

app.get("api/tweets/random", (req, res) => {
  
});

app.listen(3001, () => {
  console.log(`Example pp listening on port 3001`);
});
