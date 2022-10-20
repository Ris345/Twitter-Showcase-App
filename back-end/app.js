const express = require("express");
const path = require("path");

const app = express();

//app.use( / , express.static(path.join(__dirname, client/build)))
app.get('/api/tweets', (req, res) => {
  res.json([
    {tweetText: 'text of the tweet goes here!!!!'},
    {tweetText: 'text of the tweet goes here!!!!'},
    {tweetText: 'text of the tweet goes here!!!!'}
  ])
});



app.listen(3001, () => {
  console.log(`Example pp listening on port 3001`);
});
