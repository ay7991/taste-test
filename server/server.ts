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

// if user makes a request that is not possible
app.all('*', function(req: any, res: any) {
  res.status(404).send('Status: 404');
});

// Global Error Handling
app.use((err: any, req: any, res: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
  
module.exports = app;