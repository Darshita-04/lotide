const letterPositions = function (sentence) {
  let result = {};
  let str = sentence.replace(/ /g, '');
  for( let i = 0; i < str.length; i++) {
    const letter = str[i];
    if(!result[letter]) {
      result[letter] = [];
    }
    result[letter].push(i);
  }
  return result;
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

const assertArraysEqual  = function(arr1, arr2) {
  if(eqArrays(arr1,arr2) === true){
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello World").W, [5]);
