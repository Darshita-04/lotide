

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [12,1,5,8,9];

