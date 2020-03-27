"use strict"

const address = require('./address.json');
const tcp = require('net');
const server = tcp.createServer();

// When server is waiting for connection
server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

// When there is an error
server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

//  When server receives a message
server.on('connection', (socket) => {
  socket.on('data', (data) => {
    console.log(`server got: ${data}`);
    treatMessage(data);
  });
});

server.listen(address.port);

function treatMessage(msg) {
  // code to send message to MAX
}