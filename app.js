const express = require("express");
const app = express();
app.use(express.static(__dirname));

app.listen(1994, () => {
  console.log("listening on:1994");
});
