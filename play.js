const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    // local (node):
    host: '10.0.2.15',
    port: 50541

    // Vasily's:
    // host: '135.23.223.133',
    // port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on('data', (data) => console.log('Message from server: ', data));

  return conn;
};

console.log("Connecting ...");
connect();
