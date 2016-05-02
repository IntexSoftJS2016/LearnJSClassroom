var world = [];
var wall = '#';
var freePlace = ' ';
var worldSize, freePlaceCount = 0;

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

/*
* ввод первоначальных значений
* */
enterInformation();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*размещаем животных и растения*/
placeObjects(plant, plant.count);
placeObjects(plantEater, plantEater.count);
placeObjects(hunter, hunter.count);

/*перемещения с заданным интрервалом времени*/
setInterval('runTheLifeOfTheWorld()', 1000);