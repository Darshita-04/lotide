const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  // Check if both objects are empty
  if (key1.length === 0 && key2.length === 0) {
    return true;
  }
  
  // Check if objects have the same number of keys
  if (key1.length !== key2.length) {
    return false;
  }
  // check all keys and values are same
  for(let key of key1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if(!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if(typeof(object1[key]) === 'object' && typeof(object2[key]) === 'object' ){
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// exporting function to be able to use by other files
module.exports = eqObjects;

