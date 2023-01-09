const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require("dotenv").config();

//  gets tweets with regular search
app.get("https://twitterapp-nfle.onrender.com/api/tweets", (req, res) => {
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
      if (res.status(200) || res.status(201)) {
        res.send(response.data);
      } else if (res.status(204)) {
        res.send({ status: 204, message: "no content" });
      } else if (res.status(400)) {
        res.send({ status: 400, message: "bad request" });
      } else if (res.status(401)) {
        res.send({ status: 401, message: "unauthorized" });
      } else if (res.status(403)) {
        res.send({ status: 403, message: "forbidden" });
      } else if (res.status(404)) {
        res.send({ status: 404, message: "no found" });
      } else if (res.status(500)) {
        res.send({ status: 500, message: "internal server error" });
      } else {
        res.send({ message: "other error" });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

// gets random tweet from specified user
app.get("https://twitterapp-nfle.onrender.com/api/tweets/random", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url: `https://api.twitter.com/2/users/${user}/tweets?tweet.fields=public_metrics&expansions=attachments.media_keys,author_id&media.fields=duration_ms,height,media_key,preview_image_url,url&user.fields=description,profile_image_url`,
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
app.get("https://twitterapp-nfle.onrender.com//api/tweets/idtweet", (req, res) => {
  const user = req.query.query;
  const options = {
    method: "GET",
    url: `https://api.twitter.com/2/users/${user}/tweets?tweet.fields=public_metrics&expansions=attachments.media_keys,author_id&media.fields=duration_ms,height,media_key,preview_image_url,url&user.fields=description,profile_image_url`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (res.status(200) || res.status(201)) {
        res.send(response.data);
      } else if (res.status(204)) {
        res.send({ status: 204, message: "no content" });
      } else if (res.status(400)) {
        res.send({ status: 400, message: "bad request" });
      } else if (res.status(401)) {
        res.send({ status: 401, message: "unauthorized" });
      } else if (res.status(403)) {
        res.send({ status: 403, message: "forbidden" });
      } else if (res.status(404)) {
        res.send({ status: 404, message: "no found" });
      } else if (res.status(500)) {
        res.send({ status: 500, message: "internal server error" });
      } else {
        res.send({ message: "other error" });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

// user name with random id
app.get("https://twitterapp-nfle.onrender.com//api/tweets/randomid", (req, res) => {
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
app.get("https://twitterapp-nfle.onrender.com//api/tweets/userid", (req, res) => {
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


app.listen(process.env.PORT || 3001, () => {
  console.log(`valid repsonse on port 3001`);
});
