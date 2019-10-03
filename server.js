
const express = require('express');
const helmet = require('helmet');

const userRouter = require('./users/userRouter');
const gate = require('./data/auth/gate-middleware.js');

const server = express();

const logger = (req, res, next) => {
  console.log(`${req.method} to ${req.path}`)
  next();
}

server.use(logger)
server.use(helmet());
server.use(express.json());


server.use('/api/users', gate, userRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware







module.exports = server;
