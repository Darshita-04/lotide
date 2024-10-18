//  it keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let result = [];
  for(let element of array){
    if(callback(element)){
      return result;
    }
    result.push(element);
  }
}


// exporting function to be able to use by other files
module.exports = takeUntil;

