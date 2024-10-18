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

