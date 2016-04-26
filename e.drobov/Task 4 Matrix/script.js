/**
 * Created by Жека on 26.04.2016.
 */
var rowc = 7;
var colc = 7;
var matrix = [];
matrix = createMatrix();
fullFill(matrix);
showMatrix(matrix);

/**
 *
 * @returns {Array}
 */
function createMatrix() {


    var matrix = [];
    for (var countRow = 0; countRow < rowc; countRow++) {
        matrix[countRow] = [];
        for ( var countCol = 0; countCol < colc; countCol++) {
            matrix[countRow][countCol] = 0;
        }

    } return matrix;


}


/**
 *
 * @param startRowIndex
 * @param startColIndex
 * @param endRowIndex
 * @param endColIndex
 * @param matrix
 * @param value
 */
function fill(startRowIndex, startColIndex, endRowIndex, endColIndex, matrix, value) {

    for (var countRow = startRowIndex; countRow < endRowIndex; countRow++) {
        for (var countCol = startColIndex; countCol < endColIndex; countCol++) {
            matrix[countRow][countCol] = value;
        }
    }

}
/**
 *
 * @param matrix
 */
function showMatrix(matrix) {
    document.write("<table style='font-size: 24px;'>");
    for (var countRow = 0; countRow < rowc; countRow++) {
        document.write("<tr>");
        for (var countCol = 0; countCol < colc; countCol++) {
            document.write("<td>"+matrix[countRow][countCol]+ "</td>");
        }
    }document.write("</tr>");
}   document.write("</table>");

/**
 *
 * @param matrix
 */
function fullFill(matrix) {

    for (var count = 0; count < Math.min(rowc, colc) / 2; count++) {
        fill(count, count, rowc - count, colc - count, matrix, count);
    }
}