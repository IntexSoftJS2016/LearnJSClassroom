/*объявляем необходимые переменные*/
var world = [];
var wall = '#';
var freePlace = ' ';
var worldLength, freePlaceCount = 0, i, j;

function Plant() {
    this.design = '';
    this.count = 0;
}

function Animal() {
    this.design = '';
    this.count = 0;
    this.aggressive = false;
    this.positions = [];
    this.positions[0] = [];
    this.positions[1] = [];
}

do {
    worldLength = prompt ('Введите размерность мира (x*x): ');
} while (worldLength <= 2);

/*формируем мир*/
for (i = 0; i < worldLength; i++) {
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

var plant = new Plant();
plant.design = '*';

var plantEater = new Animal();
plantEater.design = '0';

var hunter = new Animal();
hunter.design = '8';
hunter.aggressive = true;

do {
    plantEater.count = parseInt (prompt ('Введите начальное количество травоядных: '));
    hunter.count = parseInt (prompt ('Введите количество охотников: '));
    plant.count = parseInt (prompt ('Введите количество растений: '));
    var sum = plantEater.count + hunter.count + plant.count;
    if (sum > freePlaceCount) {
        alert('Неверные данные. Свободных ячеек не хватит для всех введенных объектов.');
    }
} while (sum > freePlaceCount);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function placeObjects(object, count) {
    var randomField, randomColumn;
    for (i = 0; i < count; ) {
        randomField = getRandom(1, world.length - 1);
        randomColumn = getRandom(1, world.length - 1);

        /*если по случайному расположению ячейка пустая, то располагаем объект*/
        if (world[randomField][randomColumn] == freePlace) {
            world[randomField][randomColumn] = object.design;
            /*если размещаемый объект - животное, то сохранить его координаты*/
            if (object == Animal) {
                if (count == 1) {
                    object.positions[0][object.count] = randomField;
                    object.positions[1][object.count] = randomColumn;
                } else {
                    object.positions[0][i] = randomField;
                    object.positions[1][i] = randomColumn;
                }
            }
            i++;
        }
    }
}

/*размещаем животных и растения*/
placeObjects(plant, plant.count);
placeObjects(plantEater, plantEater.count);
placeObjects(hunter, hunter.count);

/*перемещения с заданным интрервалом времени*/
setInterval('runTheLifeOfTheWorld()', 50);

function runTheLifeOfTheWorld () {
    moveObjects(hunter);
    moveObjects(plantEater);
    document.body.innerHTML="";
    showWorld();
}

/*передвигаем объекты*/
function moveObjects(object) {
    for (i = 0; i < object.count; i++) {
        /*случайное направление движения*/
        var shiftX = 0, shiftY = 0;
        var x = object.positions[0][i];
        var y = object.positions[1][i];
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
        if (world[x + shiftX][y + shiftY] == wall) {
            shiftX *= -1;
            shiftY *= -1;
        }
        /*если два травоядных*/
        if (world[x + shiftX][y + shiftY] == plantEater.design && object.design == plantEater.design) {
            /*то размножить*/
            placeObjects(object, 1);
            object.count++;
        }
        /*если животное не хищник, перед которым не другой хищник и не растение*/
        else if (world[x + shiftX][y + shiftY] != hunter.design || (!object.aggressive &&
            world[x + shiftX][y + shiftY] != plant.design)) {
            /*то переместить объект*/
            object.positions[0][i] += shiftX;
            object.positions[1][i] += shiftY;
            world[x][y] = freePlace;
            /*если впереди было растение*/
            if (world[x + shiftX][y + shiftY] == plant.design) {
                /*съесть растение*/
                plant.count--;
            }
            /*если впереди было травоядное*/
            else if (world[x + shiftX][y + shiftY] == plantEater.design) {
                /*удалить координаты съеденого*/
                for (var j = 0; j < plantEater.count; j++) {
                    if (object.positions[0][i] == plantEater.positions[0][j] &&
                        object.positions[1][i] == plantEater.positions[1][j]) {
                        plantEater.positions[0][j] = plantEater.positions[0][plantEater.count - 1];
                        plantEater.positions[1][j] = plantEater.positions[1][plantEater.count - 1];
                        break;
                    }
                }
                plantEater.count--;
            }
            world[x + shiftX][y + shiftY] = object.design;
        }
    }
}

/*вывод "мира" на экран*/
function showWorld() {
    /*document.getElementById('statusInfo').innerHTML = Травоядных: ' + plantEater.count + ', Хищников: ' +
    hunter.count + ', Растений: ' + plant.count;*/
    document.write("<table>");
    for (var i = 0; i < worldLength; i++) {
        document.write("<tr>");
        for (j = 0; j < worldLength; j++) {
            document.write("<td>" + world[i][j] + "</td>");
        }
    }
    document.write("</table>");
}