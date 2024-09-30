const countLetters = function(sentence) {
  let strArray = [];
  let result = {};
  let str = sentence.replace(/ /g, '');
  strArray = str.split('');
  for(let item of strArray) {
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

console.log(countLetters("MOM"))
console.log(countLetters("WOW"))
console.log(countLetters("HELLO"))

