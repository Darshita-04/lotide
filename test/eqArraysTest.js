// importinng functions
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// test code


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["Hello"], ["Hello"]), true);
