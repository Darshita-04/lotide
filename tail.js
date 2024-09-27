// Assert Equal

const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tail

const tail = function(inputArr){
  if(inputArr.length > 1){
    return inputArr.slice(1);
  }else{
    return []
  }
}

// test cases
let inputArray = ["Jan", "Feb", "Mar", "Apr"]
let result = tail(inputArray);
let result1 = tail(["Jan"]);
let result2 = tail([]);

assertEqual(result.length,3);
assertEqual(result[0],"Feb");
assertEqual(result[1],"Mar");
assertEqual(result[2],"Apr");

assertEqual(result1[0],undefined);
assertEqual(result2[0],undefined);


assertEqual(inputArray.length,4);
