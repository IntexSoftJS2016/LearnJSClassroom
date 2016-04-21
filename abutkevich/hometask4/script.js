var rowCount = 15; var colCount = 30;
var matrix = [];
matrix = initMatrix();
fullFill(matrix);
showMatrix(matrix);
/**
 * @returns {Array}
 */
function initMatrix(){
    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++){
        matrix [rowIndex] = [];
        for ( var colIndex = 0; colIndex < colCount; colIndex++) {
            matrix[rowIndex][colIndex] = 0;
        }
    }
    return matrix;
}
/**
 *
 * @param {Number}rowStart
 * @param {Number}colStart
 * @param {Number}rowEnd
 * @param {Number}colEnd
 * @param {Array}matrix
 * @param {Number}number
 */
function fill(rowStart, colStart, rowEnd, colEnd, matrix, number){
    for (var rowIndex = rowStart; rowIndex < rowEnd; rowIndex ++){
        for ( var colIndex = colStart; colIndex < colEnd; colIndex ++){
            matrix[rowIndex][colIndex] = number;
        }
    }
}

/**
 * @param matrix
 */
function showMatrix(matrix){
    document.write("<table>");
    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++){
        document.write("<tr>");
        for ( var colIndex = 0; colIndex < colCount; colIndex++) {
            document.write("<td>" + matrix[rowIndex][colIndex] + "</td>")
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
/**
 * @param matrix
 */
function fullFill(matrix) {
    for (var index = 0; index < Math.min(rowCount, colCount) / 2; index++) {
        fill(index, index, rowCount - index, colCount - index, matrix, index);
    }
}