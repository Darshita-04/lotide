const assert = require('chai').assert;
const countLetters = require('../countLetters');


// TEST CODE


describe("#countLetters", () => {
  it(`returns "{M:2,O:1}" for "MOM"`, () => {
    assert.deepStrictEqual(countLetters("MOM"),{M:2,O:1});
  });
  it(`returns "{h:1,e:1,l:3,o:2,w:1,r:1,d:1}" for "hello world"`, () => {
    assert.deepStrictEqual(countLetters("hello world"),{h:1,e:1,l:3,o:2,w:1,r:1,d:1});
  });
});


