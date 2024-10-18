const without = function(source,itemsToRemove ){
  const newArray = [];
  for(let val of source){    
    if(!itemsToRemove.includes(val)){
      newArray.push(val);
    }
  }
  console.log(newArray)
  return newArray;
}

// exporting function to be able to use by other files
module.exports = without;
