// findKey

const findKey = function(object, callback) {
  for(let key in object){
    if(callback(object[key])) {
      return key;
    }
  }
}
// exporting function to be able to use by other files
module.exports = findKey;
