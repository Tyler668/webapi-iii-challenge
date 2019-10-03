// code away!
const server = require('./server');
require('dotenv').config();
// const express = require('express');
// server.use(express.json());

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port} *\n`);
});
