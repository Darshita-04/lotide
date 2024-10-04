const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // check weather objects have sane number of keys or not
  if(key1.length !== key2.length) {
    return false;
  }
  // check all keys and values are same
  for(let key of key1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if(!eqArrays(object1[key],object2[key])) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arr1,arr2) {
  if(arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  if(arr1.length !== arr2.length) {
    return false;
  }
  else{
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect; // <= add this line

  if(eqObjects(object1,object2) === true){
    console.log(`✅✅✅ Assertion Passed:  ${inspect(object1)} === ${inspect(object2)}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

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