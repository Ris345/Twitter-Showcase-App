const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const { response } = require("express");

const BEARERTOKEN =
  "AAAAAAAAAAAAAAAAAAAAAB%2BTiQEAAAAAa2b%2B6EVf%2BoLkyWme13hirQh3SuI%3DXAiAtjb7L6fSEYuq1bV1Nkm3AwcjqxnBDmaquZbNs1pDeqVoXQ";

app.get("/api/tweets", (req, res) => {
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=nasa", {
      timeout: 1000,
      headers: {
        authorization: `Bearer ${BEARERTOKEN}`,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  res.send(response);
});

app.listen(3001, () => {
  console.log(`Example pp listening on port 3001`);
});

// axios
//   .get(
//     "https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular"
//   )
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
