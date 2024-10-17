const letterPositions = function (sentence) {
  let result = {};
  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    if(letter !== ' '){
      if(!result[letter]){
        result[letter] = [];
      }
      result[letter].push(i)
    }
  }
  return result;
}



// exporting function to be able to use by other files
module.exports = letterPositions;

