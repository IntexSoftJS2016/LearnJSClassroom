/* создаем первоначальную пустую карту мира  */
var world =
  [['□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','□'],
    ['□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□','□']];

/* определяем количество объектов на карте по умолчанию  */
var stonesCount = 0, plantEatersCount = 0, predatorsCount = 0, grassCount = 0;

/* определяем внешний вид объектов  */
var stone = '□';
var plantEater = '☺';
var grass = '♣';
var predator = '☻';
var blank = ' ';

init();

setCreatures (stonesCount, stone);
setCreatures (plantEatersCount, plantEater);
setCreatures (predatorsCount, predator);
setCreatures (grassCount, grass);

setInterval('moveCreature (plantEater)', 200);

function init () {

  stonesCount = prompt ('Количество камней');
  plantEatersCount = prompt ('Количество травоядных');
  predatorsCount = prompt ('Количество хищников');
  grassCount = prompt ('Количество травы');
  /* ввод исходных данных пользователем  */
}

function getRandomRow() {

  return Math.floor(Math.random() * (world.length-2) + 1);
  /* случайный индекс строки  */
}

function getRandomColumn() {

  return Math.floor(Math.random() * (world[0].length-2) + 1);
  /* случайный индекс столбца  */
}

function setCreatures (creaturesCount, creature) {

  var randomRow, randomColumn;

  for (var count = 0; count < creaturesCount; ) {
    randomRow = getRandomRow();
    randomColumn = getRandomColumn();

    if (world[randomRow][randomColumn] == blank) {

      world[randomRow][randomColumn] = creature;
      /* если ячейка на карте свободна, заносим в нее значение
       и инкрементируем счетчик  */
      count++;
    }
  }
}

function checkEmptyCell (rowIndex, columnIndex) {

  var topCell = {x: rowIndex - 1, y: columnIndex};
  var rightCell = {x: rowIndex, y: columnIndex + 1};
  var bottomCell = {x: rowIndex + 1, y: columnIndex};
  var leftCell = {x: rowIndex, y: columnIndex - 1};
  /* определяем координаты соседних ячеек сверху, справа, снизу, слева  */

  var cellsArray = [topCell, rightCell, bottomCell, leftCell];
  var emptyCellsArray = [];

  for (var count = 0; count < cellsArray.length; count++) {

    if (world[cellsArray[count].x][cellsArray[count].y] == blank) {
      emptyCellsArray.push (cellsArray[count]);
      /* проверяем ячейку на пустоту и заносим ее координаты в массив */
    }
  }
  var randomIndex = Math.floor(Math.random() * emptyCellsArray.length);
  /*  выбираем случайную пустую ячейку из массива  */
  return emptyCellsArray[randomIndex];
}

function checkPositions (creature) {

  var creaturePositions = [];

  for (var rowCount = 0; rowCount < world.length; rowCount++) {

    for (var columnCount = 0; columnCount < world[0].length; columnCount++) {

      if (world[rowCount][columnCount] == creature) {
        /* если в ячейке находится искомое существо */
        creaturePositions.push ([rowCount, columnCount]);
        /* добавляем позицию существа в массив */
      }
    }
  }

  return creaturePositions;
}

function moveCreature (creature) {

  var currentPosition;
  var emptyCell;
  var positions = checkPositions(creature);
  /* создаем массив с позициями существ определенного вида */

  for (var count = 0; count < positions.length; count++) {

    currentPosition = positions[count];
    /* определяем координаты текущей ячейки */
    emptyCell = checkEmptyCell (currentPosition[0], currentPosition[1]);
    /* находим соседнюю пустую ячейку */

    if (emptyCell != undefined) { /* если пустая ячейка существует */
      world[emptyCell.x][emptyCell.y] = creature; /* помещаем существо */
      world[currentPosition[0]][currentPosition[1]] = blank;
      /* опустошаем предыдущую позицию */
    }
  }

  printInfo ();
}

function printInfo () {

  var myString = '';

  for (var count = 0; count < world.length; count++) {
    myString += world[count].join('&nbsp') + '<br>';
  }
  document.getElementById("myWorld").innerHTML = myString;
  console.log(myString);
}