// 3. setupInput() places a reference to that object in another variable connection which is in a global scope of that module
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // 3. setupInput() places a reference to that object in another variable connection which is in a global scope of that module
  connection = conn;
  // add an event listener for keyboard input
  // stdin.on("data", handleUserInput);

  // 4. When data comes in from your keyboard, the stdin event handler can now interact with the server because the scope in the handler now includes both data from the keyboard AND the connection object!
  stdin.on('data', (key) => {
    handleUserInput(key)
  });

  const stdout = process.stdout;
  return stdin;
};

const handleUserInput = function(key) {      
  if (key === 'w') {
    console.log('Move: up');
    connection.write('Move: up');
  }
  if (key === 'a') {
    console.log('Move: left');
    connection.write('Move: left');
  }
  if (key === 's') {
    console.log('Move: down');
    connection.write('Move: down');
  }
  if (key === 'd') {
    console.log('Move: right');
    connection.write('Move: right');
  }

  if (key === 'y') {
    console.log('snakes are the wurst');
    connection.write('Say: snakes are the wurst');
  }

  // Failsafe for CTRL + C to quit
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput
}
