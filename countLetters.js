const countLetters = function(sentence) {
  let result = {};
  let str = sentence.replace(/ /g, '');
  for(let item of str) {
    if(result[item]) {
      result[item] += 1;
    } else{
      result[item] = 1;
    }
  }
  return result;
}
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// exporting function to be able to use by other files
module.exports = countLetters;

console.log(countLetters("MOM"))
console.log(countLetters("WOW"))
console.log(countLetters("HELLO"))
let result = countLetters("HELLO");
assertEqual(result['H'], 1);
assertEqual(result['E'], 1);
assertEqual(result['L'], 2);
assertEqual(result['O'], 1);
