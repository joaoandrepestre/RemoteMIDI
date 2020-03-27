"use strict"

const address = require('./address.json');
const udp = require('dgram');
const server = udp.createSocket('udp4');

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
server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  treatMessage(msg);
});

server.bind(address.port);

function treatMessage(msg){
    // code to send message to MAX
}