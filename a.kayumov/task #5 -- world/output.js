var iteration = 0;

function printLegend() {
    /* статистика пока не обновляется */
    var listElement = document.getElementById("l1");
    listElement.innerHTML = "Растений: " + amountOfPlants;
    listElement = document.getElementById("l2");
    listElement.innerHTML = "Травоядных: " + amountOfHerbivores;
    listElement = document.getElementById("l3");
    listElement.innerHTML = "Хищников: " + amountOfPredators;
    listElement = document.getElementById("l4");
    listElement.innerHTML = "Цикл: " + iteration++;
}

function createPrintableWorld() {
    /*трансформирует одномерный массив world в матрицу для вывода на экран*/
    var printableWorld = [];
    var index = 0;

    for (var outerIterator = 0; outerIterator < WORLD_WALL_LENGTH; outerIterator++) {
        var row = [];
        for (var innerIterator = 0; innerIterator < WORLD_WALL_LENGTH; innerIterator++) {
            row[innerIterator] = world[index]["type"];
            index++;
        }
        printableWorld[outerIterator] = row;
    }
    return printableWorld;
}

function printWorld() {
    /*создаёт матрицу*/
    var printableWorld = createPrintableWorld();
    /*формирует таблицу из матрицы*/
    for (var outerIterator = 0; outerIterator < WORLD_WALL_LENGTH; outerIterator++) {
        var row = table.insertRow(-1);
        for (var innerIterator = 0; innerIterator < WORLD_WALL_LENGTH; innerIterator++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = printableWorld[outerIterator][innerIterator];
            /*вызываем функцию colorfulTable, чтобы раскрасить значения в ячейках*/
            cell.style.color = colorfulTable(printableWorld[outerIterator][innerIterator]);
        }
    }
}

function colorfulTable(tableType) {
    /*возвращает код цвета в зависимости от значения ячейки, переданного в
     функцию*/
    var grey = "#8B8989", green = "#006400", red = "#FF0000", blue = "#436EEE";

    switch (tableType) {
        case "#" :
            return grey;
        case "*" :
            return green;
        case "&" :
            return red;
        case "0" :
            return blue;
    }
}

function eraseTable() {
    /*удаляет таблицу построчно*/
    for (var iterator = 0; iterator < WORLD_WALL_LENGTH; iterator++) {
        table.deleteRow(-1);
    }
}