const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();

app.use("/", express.static("./front-end/build"));
app.use("/Random", express.static("./front-end/build"));
app.use("/Search", express.static("./front-end/build"));
//try one remove the slash from random and then remove it from search 

//  gets tweets with regular search
app.get("/Search/api/tweets", (req, res) => {
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
      console.log("axios request 1: ", response.data);
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
app.get("/Random/api/tweets/random", (req, res) => {
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
      console.log("axios request 2:", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// gets tweets based on the id of the user
app.get("/Search/api/tweets/idtweet", (req, res) => {
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
      console.log("axios request 3:", response.data);
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
app.get("/Random/api/tweets/randomid", (req, res) => {
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
      console.log("axios request 4:", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// get user to get the user id
app.get("/Search/api/tweets/userid", (req, res) => {
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
      console.log("axios request 5:", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`valid repsonse on port ${port}`);
});
