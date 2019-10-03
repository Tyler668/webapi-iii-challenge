// code away!
const server = require('./server');
// const express = require('express');
// server.use(express.json());

server.listen(4444, () => {
  console.log('\n* Server Running on http://localhost:4444 *\n');
});
