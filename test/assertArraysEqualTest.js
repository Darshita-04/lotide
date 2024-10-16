// importinng functions

const assertArraysEqual = require("../assertArraysEqual");

// test code

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);
assertArraysEqual([], []);
assertArraysEqual(["Hello"], ["Hello"]);

