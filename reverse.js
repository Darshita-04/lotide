const args = process.argv.slice(2);

const reverseString = function(str){
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) { 
    reversed +=  str[i];
  }
  return reversed;
}

for (let arg of args){
  console.log(reverseString(arg));
}