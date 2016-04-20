function solveTask() {
    var demensions = getRowsAndColumnsCount();
    var matrix = createMatrix(demensions);
    matrix = fillMatrix(matrix, demensions);
    renderMatrix(matrix);
}

function renderMatrix(matrix) {
    var rootDiv = document.getElementsByClassName("matrix")[0];
    var table = document.createElement("table");
    for (var i = 0; i < matrix.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < matrix[0].length; j++) {
            var column = document.createElement("td");
            column.textContent = matrix[i][j];
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    rootDiv.appendChild(table);
}

function fillMatrix(matrix, demensions) {
    var startRow = 0, startColumn = 0, value = 0, rowCount = demensions.rowCount, columnCount = demensions.columnCount;

    for (var count = 0; count < rowCount; count++) {
        for (var i = startRow; i < rowCount; i++) {
            for (var j = startColumn; j < columnCount; j++) {
                matrix[i][j] = value;
            }
        }
        startRow++;
        startColumn++;
        columnCount--;
        rowCount--;
        value++;
    }
    return matrix;
}


function getRowsAndColumnsCount() {
    return {
        rowCount: prompt("Input numbers of rows", ''),
        columnCount: prompt("Input numbers of columns", '')
    }
}

function createMatrix(demensions) {
    matrix = [];
    for (var i = 0; i < demensions.rowCount; i++) {
        matrix.push([]);
    }
    return matrix;
}


