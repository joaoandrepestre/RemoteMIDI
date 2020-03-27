"use strict"

const address = require('./address.json');
const tcp = require('net');
const buffer = require('buffer');

// creating a client socket
let client = new tcp.Socket();

client.connect(address.port, address.ip, () => {
  console.log('Connected!');
});

//sending msg
client.write(createMessage(), (error) => {
  if (error) {
    client.close();
  } else {
    console.log('Data sent !!!');
  }
});

function createMessage() {
  // Code to get input from MAX
  let msg = Buffer.from('doidera');
  return msg;
}