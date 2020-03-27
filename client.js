"use strict"

const address = require('./address.json');
const udp = require('dgram');
const buffer = require('buffer');

// creating a client socket
const client = udp.createSocket('udp4');

//buffer msg
let data = Buffer.from('siddheshrane');

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

//sending msg
client.send(createMessage(),address.port,address.ip,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

function createMessage(){
    // Code to get input from MAX
    let msg = Buffer.from('doidera');
    return msg;
}