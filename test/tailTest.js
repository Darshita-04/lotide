// importinng functions
const assertEqual = require("../assertEqual");
const tail = require("../tail");

// test code

let inputArray = ["Jan", "Feb", "Mar", "Apr"]
let result = tail(inputArray);
let result1 = tail(["Jan"]);
let result2 = tail([]);

assertEqual(result.length,3);
assertEqual(result[0],"Feb");
assertEqual(result[1],"Mar");
assertEqual(result[2],"Apr");
assertEqual(result1.length,0);
assertEqual(result2.length,0);
assertEqual(inputArray.length,4);
