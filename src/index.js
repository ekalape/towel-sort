// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) return [];
    let m = matrix.map((a, index) =>
        index % 2 != 0 ? matrix[index].reverse() : matrix[index]
    );
    return m.flatMap((x) => x);
};
