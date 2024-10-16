// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// exporting function to be able to use by other files
module.exports = assertEqual;
 
