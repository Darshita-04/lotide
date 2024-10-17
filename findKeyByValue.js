const findKeyByValue = function(object,value) {
  for(let key in object) {
    if(object[key] === value) {
      return key;
    }
  }
}

// exporting function to be able to use by other files
module.exports = findKeyByValue;