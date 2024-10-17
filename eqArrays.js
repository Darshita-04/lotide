
// function to check if 2 arrays are same
const eqArrays = function(arr1,arr2) {
  if(arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  if(arr1.length !== arr2.length) {
    return false;
  }
  else{
    for(let i = 0; i < arr1.length; i++) {
      if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
        if(!eqArrays(arr1[i],arr2[i])) {
          return false;
        }
      }
      else if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

// exporting function to be able to use by other files

module.exports = eqArrays;
