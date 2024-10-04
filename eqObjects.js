
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // check weather objects have sane number of keys or not
  if(key1.length !== key2.length) {
    return false;
  }
  // check all keys and values are same
  for(let key of key1) {
    if(object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};

// test

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const longSleeveShirtObject1 = {sleeveLength: "long", size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(longSleeveShirtObject1, longSleeveShirtObject), true);
