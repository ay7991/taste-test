const express = require("express");
const app = express();
const path = require("path");
const port = 1025;

// Automatically parse urlencoded body content and form data from incoming requests and place it in req.body
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.resolve(__dirname, "../build")));

app.get('*', (req: any, res: any) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/static/index.html'));
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
  
module.exports = app;