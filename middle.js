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
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};

const middle = function(arr) {
  let arrLength = arr.length;
  let midIndex = Math.floor(arrLength/2);
  if (arrLength <= 2){
    return [];
  }
  return arrLength % 2 === 1 ? [arr[midIndex]] : [arr[midIndex - 1],arr[midIndex]];
}

assertArraysEqual(middle([1, 2, 3,4,'Hello',6,7,8,9]),['Hello'])
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6])
assertArraysEqual(middle([1,2,3]),[2])
assertArraysEqual(middle([1,2]),[])
assertArraysEqual(middle([1]),[])