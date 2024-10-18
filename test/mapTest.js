// importing functions

const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

// test code

assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, (word) => word.length > 3), [true, true, false, true, false]);
assertArraysEqual(map(numbers, (number) => number % 2 === 0), [true, false, false, true, false]);
