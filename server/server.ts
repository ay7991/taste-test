const express = require("express");
const app = express();
const path = require("path");
const port = 1025;
const mongooseTT = require('mongoose');

mongooseTT.connect('mongodb://localhost:27017/TasteTest');
mongooseTT.connection.once('open', () => {
  console.log('Connected to Database');
});

const userRouter = require('./routes/userRouter');

// Automatically parse urlencoded body content and form data from incoming requests and place it in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
  
module.exports = app;