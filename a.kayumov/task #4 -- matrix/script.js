var matrix = [];

matrixCreate(prompt("Введите количество строк"),
    prompt("Введите количество столбцов"));

print(matrix);

function matrixCreate(rowTotal, colTotal) {
    for (var rowIterator = 0; rowIterator < rowTotal; rowIterator++) {
        matrix[rowIterator] = rowCreate(rowTotal, colTotal, rowIterator);
    }
}

function rowCreate(rowTotal, colTotal, rowIterator) {
    var row = [];

    for (var colIterator = 0; colIterator < colTotal; colIterator++) {
        row[colIterator] = Math.min(rowIterator, colIterator,
            rowTotal - rowIterator - 1, colTotal - colIterator - 1);
    }
    return row;
}

function print(matrix) {
    for (var key in matrix) {
        printRow(matrix[key])
        document.write("<BR>");
    }
}

function printRow(row) {
    for (var key in row) {
        document.write(row[key] + " ");
    }
}