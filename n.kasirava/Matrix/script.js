var rowCount = 0;
var colCount = 0;

init();

var numbersArray = createArray (rowCount, colCount);

printArray (rowCount);

function init () {

    rowCount = prompt('Введите количество строк');
    colCount = prompt('Введите количество столбцов');
}

function createArray (rowCount,colCount){

    var arr = new Array();

    for(var rowIndex = 0; rowIndex < rowCount; rowIndex++){

        arr[rowIndex] = new Array();

        for(var colIndex = 0; colIndex < colCount; colIndex++){

            arr[rowIndex][colIndex] = Math.min(rowIndex, colIndex, 
                                               rowCount - rowIndex - 1, 
                                               colCount - colIndex - 1);
        }
    }
    
    return arr;
}

function printArray (rowCount) {

    for (var count=0; count<rowCount; count++) {

        var newParagraph = document.createElement('p');
        newParagraph.innerHTML = numbersArray[count].join(' ');
        myArray.appendChild(newParagraph);

    }

}