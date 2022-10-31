const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require('dotenv').config(); 

//console.log(process.env.SECRET_KEY)


const BEARERTOKEN =
  "AAAAAAAAAAAAAAAAAAAAAB%2BTiQEAAAAAa2b%2B6EVf%2BoLkyWme13hirQh3SuI%3DXAiAtjb7L6fSEYuq1bV1Nkm3AwcjqxnBDmaquZbNs1pDeqVoXQ";






app.get("/api/tweets", (req, res) => {
  console.log(req.query.q) 
  console.log(req.query.age)
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=elonmusk", {
      timeout: 1000,
      headers: {
        authorization: `Bearer ${BEARERTOKEN}`,
      },
    })
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
