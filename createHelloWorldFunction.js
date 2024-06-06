const assert = require("assert");

function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

assert(createHelloWorld()() == "Hello World");
