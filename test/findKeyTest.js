const assert = require('chai').assert;
const findKey = require('../findKey');

const data = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
}

const cb = (x) => x.stars === 2;

describe("#findKey", () => {
  it(`returns "noma" for ${data} and ${cb}`, () => {
    assert.strictEqual(findKey(data,cb), 'noma');
  });
});