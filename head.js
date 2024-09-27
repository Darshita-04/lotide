// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse labs");
// assertEqual(1, "1");
// assertEqual(1, 2);
// assertEqual("Bootcamp", "Bootcamp");

const head = function(arr) {
  return arr[0] ;
}


// TEST CODE

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), 5);