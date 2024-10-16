const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect; // <= add this line

  if(eqObjects(object1,object2) === true){
    console.log(`✅✅✅ Assertion Passed:  ${inspect(object1)} === ${inspect(object2)}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


// exporting function to be able to use by other files
module.exports = assertObjectsEqual;


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