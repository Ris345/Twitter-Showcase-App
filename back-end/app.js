const express = require("express");
const path = require("path");

const app = express();

//app.use( / , express.static(path.join(__dirname, client/build)))

app.listen(3001, () => {
  console.log(`Example pp listening on port 3001`);
});
