// importinng functions
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// test code

assertArraysEqual(middle([1, 2, 3,4,'Hello',6,7,8,9]),['Hello'])
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6])
assertArraysEqual(middle([1,2,3]),[2])
assertArraysEqual(middle([1,2]),[])
assertArraysEqual(middle([1]),[])