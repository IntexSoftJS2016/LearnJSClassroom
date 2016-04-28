/*формируем мир*/
function createWorld() {
    do {
        worldLength = prompt ('Введите размерность мира (x*x): ');
    } while (worldLength <= 2);
    
    for (var i = 0; i < worldLength; i++) {
        world[i] = [];
        for (j = 0; j < worldLength; j++) {
            var object;
            if (i === 0 || i === worldLength - 1 || j === 0 || j === worldLength - 1 || Math.random() > 0.9) {
                object = wall;
            } else {
                object = freePlace;
                freePlaceCount++;
            }
            world[i][j] = object;
        }
    }

    do {
        plantEater.count = parseInt (prompt ('Введите начальное количество травоядных: '));
        hunter.count = parseInt (prompt ('Введите количество хищников: '));
        plant.count = parseInt (prompt ('Введите количество растений: '));
        var sum = plantEater.count + hunter.count + plant.count;
        if (sum > freePlaceCount) {
            alert('Неверные данные. Свободных ячеек не хватит для всех введенных объектов.');
        }
    } while (sum > freePlaceCount);
}