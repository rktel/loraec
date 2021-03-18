const dgram = require('dgram');
const port = 1700;
const ip = "172.104.251.31";
const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.connect(port, ip, (err) => {
  client.send(message, (err) => {
    client.close();
  });
});