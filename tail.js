// Assert Equal

const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// Tail

const tail = function(inputArr){
  const slicedTail = inputArr.slice(1);
  return slicedTail
}

// test cases

let result = tail(["Jan", "Feb", "Mar", "Apr"]);
assertEqual(result.length,3);
assertEqual(result[0],"Feb");
assertEqual(result[1],"Mar");
assertEqual(result[2],"Apr");