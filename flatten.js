const flatten = function (arr){
  let result = [];
  for(let element of arr){
    if(Array.isArray(element)){
      for(let innerElem of element){
        result.push(innerElem)
      }
    }
    else{
      result.push(element);
    }
  }
  return result;
}

// exporting function to be able to use by other files
module.exports = flatten;

