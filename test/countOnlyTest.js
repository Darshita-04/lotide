const assert = require('chai').assert;
const countOnly = require('../countOnly');

// test code


// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const toCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

describe("#countOnly", () => {
  it(`returns {Jason:1,Fang:2} for ${firstNames} and ${toCount}`, () => {
    assert.deepStrictEqual(countOnly(firstNames,toCount),{Jason:1,Fang:2});
  });
});
