/*одномерный массив, содержащий все объекты*/
var world = [];

var table = document.getElementById("table");

function createEmptyWorld() {
    /*создаёт пустой мир с внешними стенами и пустым пространством между ними*/
    for (var outerIterator = 0; outerIterator < WORLD_WALL_LENGTH; outerIterator++) {
        for (var innerIterator = 0; innerIterator < WORLD_WALL_LENGTH; innerIterator++) {
            /*верхняя и нижняя границы всегда стены*/
            if (outerIterator === 0 || outerIterator === WORLD_WALL_LENGTH - 1) {
                world.push(createEntity("#"));
                /*боковые границы всегда стены*/
            } else if (innerIterator === 0 || innerIterator === WORLD_WALL_LENGTH - 1) {
                world.push(createEntity("#"));
            } else {
                world.push(createEntity(" "));
            }
        }
    }
}

function addEntity(type, amount, health) {
    /*добавляет сущность указанного типа на случайную пустую клетку, в указанном
     количестве.*/
    for (var iterator = 0; iterator < amount; iterator++) {
        /*получает случайный индекс гарантированно пустой ячейки в массиве world*/
        var randomCoordinate = getEmptyRandomCoordinate();
        world[randomCoordinate] = createEntity(type, health);
    }
}

function randomInteger(min, max) {
    /*возвращает псевдолучайное целое из отрезка [min; max]*/
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEmptyRandomCoordinate() {
    /*возвращает псевдослучайное значение, которое являются
     индексом гарантированно пустой ячейки в массиве world*/
    var coordinate;

    for (; ;) {
        /*учитывает первый и последний индекс, который гарантированно является
         стеной*/
        coordinate = randomInteger(1, world.length - 2);
        /*продолжает бесконечный цикл, пока проверка не вернёт пустую клетку*/
        if ((world[coordinate]["type"] === " ")) {
            return coordinate;
        }
    }
}

