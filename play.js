// const net = require("net");
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log(connect);
console.log("Connecting ...");

// 1. connect() returns an object that can be used to interact with the server:
let passedObject = connect();
// 2. the object returned by connect() should be passed into setupInput()

// where setupInput and handleUserInput functions were before moved to input.js:

// 3. setupInput() places a reference to that object in another variable connection which is in a global scope of that module
setupInput(passedObject);
