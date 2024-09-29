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
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){      
      for(let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    }
    else{
      result.push(arr[i]);
    }
  }
  return result;
}


console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1,2,[3,4,5],6,7,[8,9,10]]),[1,2,3,4,5,6,7,8,9,10]);
