// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) return [];
    let result = [];
    let counter = 0;
    for (let i of matrix) {
        if (counter % 2 == 0) {
            for (let j = 0; j <= i.length - 1; j++) {
                result.push(matrix[counter][j]);
            }
        } else {
            for (let j = i.length - 1; j >= 0; j--) {
                result.push(matrix[counter][j]);
            }
        }
        counter++;
    }
    return result;
};
