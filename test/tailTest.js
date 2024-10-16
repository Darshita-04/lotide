// importinng functions
const assert = require('chai').assert;
const tail = require("../tail");

// test code

describe("#tail", () => {
  it(`returns ["Feb", "Mar", "Apr"] for ["Jan", "Feb", "Mar", "Apr"]`, () => {
    assert.deepEqual(tail(["Jan", "Feb", "Mar", "Apr"]), ["Feb", "Mar", "Apr"]);
  });

  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});