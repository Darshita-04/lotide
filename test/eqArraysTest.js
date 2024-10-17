// importinng functions
const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

// Tests

describe("#eqArrays", () => {
  it(`returns true for ["Feb", "Mar", "Apr"] and ["Feb", "Mar", "Apr"]`, () => {
    assert.deepEqual(eqArrays(["Feb", "Mar", "Apr"],["Feb", "Mar", "Apr"]),true);
  });
  it(`returns true for ["5", "6", "9"] and  ["5", "6", "9"]}`, () => {
    assert.deepEqual(eqArrays(["5", "6", "9"],["5", "6", "9"]),true);
  });
  it(`returns true for ["5", "6", "9",[a, b, c]] and  ["5", "6", "9",[a, b, c]]}`, () => {
    assert.deepEqual(eqArrays(["5", "6", "9","[a, b, c]"],["5", "6", "9","[a, b, c]"]),true);
  });
  it(`returns true for ["5", "6", "9","[a, b, c, [1, 2, 4, 5]]"] and  ["5", "6", "9","[a, b, c, [1, 2, 4, 5]]"]}`, () => {
    assert.deepEqual(eqArrays(["5", "6", "9","[a, b, c, [1, 2, 4, 5]]"],["5", "6", "9","[a, b, c, [1, 2, 4, 5]]"]),true);
  });
});

