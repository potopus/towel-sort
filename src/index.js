
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  return matrix.length === 0  ? [] : matrix.map((item, count) => count % 2 === 0 ? item : item = item.reverse()).flat();
}


// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// console.log(towelSort())