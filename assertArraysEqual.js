const eqArrays = require("./eqArrays");

// function implemetion
const assertArraysEqual  = function(arr1, arr2) {
  if(eqArrays(arr1,arr2) === true){
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};


// exporting function to be able to use by other files

module.exports = assertArraysEqual;

