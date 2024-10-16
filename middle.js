const middle = function(arr) {
  let arrLength = arr.length;
  let midIndex = Math.floor(arrLength/2);
  if (arrLength <= 2){
    return [];
  }
  return arrLength % 2 === 1 ? [arr[midIndex]] : [arr[midIndex - 1],arr[midIndex]];
}

// exporting function to be able to use by other files
module.exports = middle;
