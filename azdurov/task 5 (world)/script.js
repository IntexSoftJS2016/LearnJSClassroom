/*объявляем необходимые переменные*/
var world = [];
var worldLength, plantCount, smartPlantEaterCount, freePlaceCount = 0, sum = 0, i, j;
var wall = '#';
var smartPlantEater = '0';
var plant = '*';
var freePlace = ' ';
var smartPlantEaterPositions = [];
smartPlantEaterPositions[0] = [];
smartPlantEaterPositions[1] = [];

do {
    worldLength = prompt ('Введите размерность мира (x*x): ');
} while (worldLength <= 2);

/*формируем мир*/
for (i = 0; i < worldLength; i++) {
    world[i] = [];
    for (j = 0; j < worldLength; j++) {
        var object;
        if (i === 0 || i === worldLength - 1 || j === 0 || j === worldLength - 1 || Math.random() > 0.8) {
            object = wall;
        } else {
            object = freePlace;
            freePlaceCount++;
        }
        world[i][j] = object;
    }
}

do {
    smartPlantEaterCount = parseInt (prompt ('Введите количество травоядных: '));
    plantCount = parseInt (prompt ('Введите количество растений: '));
    sum = smartPlantEaterCount + plantCount;
    if (sum > freePlaceCount) {
        alert('Неверные данные. Свободных ячеек не хватит для всех введенных объектов');
    }
} while (sum > freePlaceCount);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*размещаем животных и растения*/
placeObjects(smartPlantEater, smartPlantEaterCount);
placeObjects(plant, plantCount);

function placeObjects(object, objectCount) {
    var randomField, randomColumn;
    for (i = 0; i < objectCount; ) {
        randomField = getRandom(1, world.length - 1);
        randomColumn = getRandom(1, world.length - 1);

        /*если по случайному расположению ячейка пустая, то располагаем объект*/
        if (world[randomField][randomColumn] == freePlace) {
            world[randomField][randomColumn] = object;
            smartPlantEaterPositions[i][0] = randomField;
            smartPlantEaterPositions[i][1] = randomColumn;
            i++;
        }
    }
}

/*перемещения с заданным интрервалом времени*/
setInterval('moveSmartPlantEater ()', 500);

/*передвигаем объекты*/
function moveObject(i, shiftX, shiftY, x, y) {
    if (world[x + shiftX][y + shiftY] == freePlace || world[x + shiftX][y + shiftY] == plant) {
        world[x + shiftX][y + shiftY] = smartPlantEater;
        world[x][y] = freePlace;
        smartPlantEaterPositions[i][0] += shiftX;
        smartPlantEaterPositions[i][1] += shiftY;
    }
}

function moveSmartPlantEater () {
    for (i = 0; i < smartPlantEaterCount; i++) {
        var shiftX = 0, shiftY = 0;
        var randomDirection = getRandom(1, 4);
        switch (randomDirection) {
            case 1:
                shiftX = 1;
                break;
            case 2:
                shiftY = 1;
                break;
            case 3:
                shiftX = -1;
                break;
            case 4:
                shiftY = -1;
                break;
        }
        moveObject(i, shiftX, shiftY, smartPlantEaterPositions[i][0], smartPlantEaterPositions[i][1]);
    }
    document.body.innerHTML="";
    showWorld();
}

/*вывод "мира" на экран*/
function showWorld() {
    document.write("<table>");
    for (var i = 0; i < worldLength; i++) {
        document.write("<tr>");
        for (j = 0; j < worldLength; j++) {
            document.write("<td width=10%>" + world[i][j] + "</td>");
        }
    }
    document.write("</table>");
}