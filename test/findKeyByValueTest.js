const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it(`returns "drama" for ${bestTVShowsByGenre}`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"),"drama");
  });
});


