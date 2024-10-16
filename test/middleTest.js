// importinng functions
const assert = require('chai').assert;
const middle = require("../middle");


// test code

describe("#middle", () => {
  it(`returns ['Hello'] for [1, 2, 3,4,'Hello',6,7,8,9]`, () => {
    assert.deepEqual(middle([1, 2, 3,4,'Hello',6,7,8,9]), ['Hello']);
  });

  it(`returns [5,6] for [1,2,3,4,5,6,7,8,9,10]`, () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]); 
  });

  it(`returns [] for [1,2]`, () => {
    assert.deepEqual(middle([1,2]), []); 
  });
});