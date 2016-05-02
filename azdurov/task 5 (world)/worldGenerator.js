function enterInformation() {
    do {
        worldSize = prompt('Введите размерность мира (x*x): ');
    } while (worldSize <= 2);
    
    createWorld();
    
    do {
        plantEater.count = parseInt(prompt('Введите начальное количество травоядных: '));
        hunter.count = parseInt(prompt('Введите количество хищников: '));
        plant.count = parseInt(prompt('Введите количество растений: '));
        var sum = plantEater.count + hunter.count + plant.count;
        if (sum > freePlaceCount) {
            alert('Неверные данные. Свободных ячеек не хватит для всех введенных объектов.');
        }
    } while (sum > freePlaceCount);
}

/*
 * формируем мир
 */
function createWorld() {
    for (var rowIndex = 0; rowIndex < worldSize; rowIndex++) {
        world[rowIndex] = [];
        for (var colIndex = 0; colIndex < worldSize; colIndex++) {
            var object;
            if (rowIndex === 0 || rowIndex === worldSize - 1 || colIndex === 0 || colIndex === worldSize - 1 || Math.random() > 0.9) {
                object = wall;
            } else {
                object = freePlace;
                freePlaceCount++;
            }
            world[rowIndex][colIndex] = object;
        }
    }
}

/*
 * заполняем мир объектами
 */
function placeObjects(object, count) {
    var randomRow, randomColumn;
    for (var objIndex = 0; objIndex < count; ) {
        randomRow = getRandom(1, world.length - 1);
        randomColumn = getRandom(1, world.length - 1);

        /*если по случайному расположению ячейка пустая, то располагаем объект*/
        if (world[randomRow][randomColumn] == freePlace) {
            world[randomRow][randomColumn] = object.design;
            /*
             * если размещаемый объект - животное, то сохранить его координаты
             * */
            if (count == 1) {
                object.positions[0][object.count] = randomRow;
                object.positions[1][object.count] = randomColumn;
            } else {
                object.positions[0][objIndex] = randomRow;
                object.positions[1][objIndex] = randomColumn;
            }
            objIndex++;
        }
    }
}