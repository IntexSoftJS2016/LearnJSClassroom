/*объявляем необходимые переменные*/
var world = [];
var wall = '#';
var freePlace = ' ';
var worldLength, freePlaceCount = 0;

function Plant() {
    this.design = '';
    this.count = 0;
    this.positions = [];
    this.positions[0] = [];
    this.positions[1] = [];
}

function Animal() {
    this.design = '';
    this.count = 0;
    this.aggressive = false;
    this.positions = [];
    this.positions[0] = [];
    this.positions[1] = [];
}

var plant = new Plant();
plant.design = '*';

var plantEater = new Animal();
plantEater.design = '0';

var hunter = new Animal();
hunter.design = '8';
hunter.aggressive = true;

/*формируем мир*/
createWorld();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*размещаем животных и растения*/
placeObjects(plant, plant.count);
placeObjects(plantEater, plantEater.count);
placeObjects(hunter, hunter.count);

/*перемещения с заданным интрервалом времени*/
setInterval('runTheLifeOfTheWorld()', 1000);

try {
    function runTheLifeOfTheWorld() {
        moveObjects(hunter);
        moveObjects(plantEater);
        if (Math.random() > 0.9) {
            placeObjects(plant, 1);
            plant.count++;
        }
        document.body.innerHTML = "";
        showWorld();
        if (plantEater.count == 0) {
            throw "Игра закончилась. Всех съели :-(";
        }
    }
} catch (e) {
    alert(e);
    window.stop();
    throw "stop";
}

/*вывод "мира" на экран*/
function showWorld() {
    document.write("Травоядных: " + plantEater.count + ", Хищников: " + hunter.count + ", Растений: " + plant.count);
    document.write("<table>");
    for (var i = 0; i < worldLength; i++) {
        document.write("<tr>");
        for (var j = 0; j < worldLength; j++) {
            document.write("<td>" + world[i][j] + "</td>");
        }
    }
    document.write("</table>");
}