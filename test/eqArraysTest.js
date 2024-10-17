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
});

