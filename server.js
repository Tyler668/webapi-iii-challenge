
const express = require('express');
const server = express();

server.use(express.json());
const userRouter = require('./users/userRouter');


server.use('/api/users', userRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

const logger = (req, res, next) => {
  console.log(`${req.method} to ${req.path}`)

  next();

  server.use(logger)
}






module.exports = server;
