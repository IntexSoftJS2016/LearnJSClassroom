rowCount = prompt('rowsCount');
colCount = prompt('colCount');
var matrix = [];

for (var i = 0; i < rowCount; i++) {
    matrix[i] = [];
}

var count = 0;
for (i = 0; i < rowCount - i; i++) {
    for (j = 0; j < colCount - j; j++) {
        var minEl = Math.min(i, j);
            matrix[i][j] = minEl;
            matrix[rowCount - i - 1][colCount - j - 1] = minEl;
            matrix[i][colCount - j - 1] = minEl;
            matrix[rowCount - i - 1][j] = minEl;
    }
    count++;
}

document.write("<table>");
for (var i = 0; i < rowCount; i++) {
    document.write("<tr>");
    for (var j = 0; j < colCount; j++) {
        document.write("<td width=10%>" + matrix[i][j] + "</td>");
    }
}
document.write("</table>");