const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


// Tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveShirtObject1 = { sleeveLength: "long", size: "medium", color: "red" };
const multiColorShirtObject = {size: "medium", colors: ["red", "blue"], study:{school:"KV", collage:"mm", grades:{firstclass:true}}};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], study:{school:"KV", collage:"mm", grades:{firstclass:true}} };

console.log(eqObjects(multiColorShirtObject,anotherMultiColorShirtObject))

describe("#eqObjects", () => {
  it(`returns true for ${shirtObject} and ${anotherShirtObject}`, () => {
    assert.deepStrictEqual(eqObjects(shirtObject,anotherShirtObject),true);
  });
  it(`returns true for ${longSleeveShirtObject} and ${longSleeveShirtObject1}`, () => {
    assert.deepStrictEqual(eqObjects(longSleeveShirtObject,longSleeveShirtObject1),true);
  });
  it(`returns true for ${multiColorShirtObject} and ${anotherMultiColorShirtObject}`, () => {
    assert.deepStrictEqual(eqObjects(multiColorShirtObject,anotherMultiColorShirtObject),true);
  });
});

