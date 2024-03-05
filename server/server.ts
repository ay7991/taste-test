const express = require("express");
const app = express();
const path = require("path");
const port = 1025;

// anything that comes into express, unpackage it
app.use(express.json());

// don't break my API connection
app.use(express.urlencoded());

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
  
module.exports = app;