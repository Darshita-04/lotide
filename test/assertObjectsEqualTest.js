// importinng functions

const assertObjectsEqual = require("../assertObjectsEqual");

// test code


// Tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveShirtObject1 = { sleeveLength: "long", size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// Run assertions
assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);
assertObjectsEqual(longSleeveShirtObject1, longSleeveShirtObject);
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);