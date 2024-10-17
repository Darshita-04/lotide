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

// exporting function to be able to use by other files
module.exports = countLetters;
