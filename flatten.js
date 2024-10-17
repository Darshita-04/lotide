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


const assertArraysEqual  = function(arr1, arr2) {
  if(eqArrays(arr1,arr2) === true){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};

const flatten = function (arr){
  let result = [];
  for(let element of arr){
    if(Array.isArray(element)){
      for(let innerElem of element){
        result.push(innerElem)
      }
    }
    else{
      result.push(element);
    }
  }
  return result;
}


// exporting function to be able to use by other files
module.exports = flatten;

// console.log(flatten([1, 2, [3, 4,[3, 4]], 5, [6]]));

assertArraysEqual(flatten([1,2,[3,4,5],6,7,[8,9,10]]),[1,2,3,4,5,6,7,8,9,10]);
