/**
 * Created by Natalie on 4/22/2016.
 */
  var CELL_SIZE = 45;
  var framesPerSecond = 30;
  var horizontalCellsCount = 18, verticalCellsCount = 18;
  var plantsCount, plantEatersCount, predatorsCount;
  var canvas = document.getElementById("canvas");
  var canvasContext = canvas.getContext('2d');
  var time=0, gameStateInterval;

  var plantSymbol = '*';
  var plantEaterSymbol = '0';
  var stoneSymbol = '#';
  var predatorSymbol = '@';
  var blankSymbol = ' ';

  var plants = [], plantEaters = [], predators = [];

  var stonePic = new Image();
  stonePic.src = 'images/stone.jpg';
  var plantPic = new Image();
  plantPic.src = 'images/grass.jpg';
  var plantEaterPic = new Image();
  plantEaterPic.src = 'images/planteater.jpg';
  var predatorPic = new Image();
  predatorPic.src = 'images/predator.jpg';
  var sandPic = new Image();
  sandPic.src = 'images/sand.jpg';

  var Cell = function (x, y) {
    var self = this;
    self.x = x;
    self.y = y;
  };

  var map = [['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']];

  var startGame = function () {
    getValue();
  };

  function init() {
    var form = document.getElementById ('form');
    form.style.display = "none";
    var canvasDiv = document.getElementById ('canvasDiv');
    canvasDiv.style.display = "block";
    canvas.width = toPixels(horizontalCellsCount) + 2;
    canvas.height = toPixels(verticalCellsCount) + 2;
    createCreatures(plantsCount, plantSymbol, plants, Plant);
    createCreatures(plantEatersCount, plantEaterSymbol, plantEaters, PlantEater);
    createCreatures(predatorsCount, predatorSymbol, predators, Predator);
    setInterval(updateAll, 1000 / framesPerSecond);
    setInterval('cleanArray(plants)', 500);
    setInterval('cleanArray(plantEaters)', 500);
    setInterval('cleanArray(predators)', 500);
    setInterval(plantsGrow, 200);
    setInterval (printCreaturesNumber, 1000);
    gameStateInterval =setInterval (gameOver, 1000);

  }/* initialization */

  function createCreatures(creaturesCount, creatureSymbol, creaturesArray, Class) {
    for (var i = 0; i < creaturesCount; i++) {
      var array = findEmptyCells();
      var emptyCell = getRandomIndex(array);
      map[emptyCell.x][emptyCell.y] = creatureSymbol;
      var creature = new Class(toPixels(emptyCell.x), toPixels(emptyCell.y));
      creaturesArray.push(creature);
    }
  }/* creates initial number of creatures */

  function findEmptyCells() {
    var emptyCells = [];
    for (var i = 0; i < horizontalCellsCount; i++) {
      for (var j = 0; j < verticalCellsCount; j++) {
        if (map[i][j] == blankSymbol) {
          var emptyCell = new Cell(i, j);
            emptyCells.push(emptyCell);
        }
      }
    }
    return emptyCells;
  }/* returns an array with all empty cells on map */

  function findSpecificCells(symbol, array) {
    var specificCells = [];
    for (var i = 0; i < horizontalCellsCount; i++) {
      for (var j = 0; j < verticalCellsCount; j++) {
        if (array[i][j] == symbol) {
          var specificCell = new Cell(i, j);
          /* an object with specific cell position */
          specificCells.push(specificCell);
        }
      }
    }
    return specificCells;
  }/* returns an array with custom cells on map */

  function getRandomIndex(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }/* returns random array element */

  function updateAll() {
    canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    canvasContext.fillStyle = "#000000";
    for (var i = 0; i < horizontalCellsCount; i++) {
      for (var j = 0; j < verticalCellsCount; j++) {
        if (map[i][j] == stoneSymbol) {
          canvasContext.drawImage(stonePic, toPixels(i), toPixels(j));
        }
        else if (map[i][j] == plantSymbol) {
          canvasContext.drawImage(plantPic, toPixels(i), toPixels(j));
        }
        else if (map[i][j] == plantEaterSymbol) {
          canvasContext.drawImage(plantEaterPic, toPixels(i), toPixels(j));
        }
        else if (map[i][j] == predatorSymbol) {
          canvasContext.drawImage(predatorPic, toPixels(i), toPixels(j));
        }
        else if (map[i][j] == blankSymbol) {
          canvasContext.drawImage(sandPic, toPixels(i), toPixels(j));
        }
      }
    }
  }/* redraws canvas */

  function cleanArray(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == 0) {
        array.splice(i, 1);
      }
    }
  }

  function getValue(){
    plantsCount = document.getElementById("plants").value;
    plantEatersCount = document.getElementById("plantEaters").value;
    predatorsCount = document.getElementById("predators").value;
    if (plantsCount > 80 || plantEatersCount > 80 || plantEatersCount < 2 ||
        predatorsCount > 80 || predatorsCount < 2) {
      alert ('Неправильно введенные данные!');
    }
    else init();
  }

  function calcCreatures (creature) {
    switch (creature) {
      case 'plant': return plants.length;
      case 'plantEater': return plantEaters.length;
      case 'predator': return predators.length;
    }
   }

  function printCreaturesNumber () {
    document.getElementById("plantsNumber").innerHTML = calcCreatures('plant');
    document.getElementById("plantEatersNumber").innerHTML = calcCreatures('plantEater');
    document.getElementById("predatorsNumber").innerHTML = calcCreatures('predator');
    document.getElementById("timer").innerHTML = timer();
  }

  function gameOver () {
    if (plantEaters.length <2 || predators.length <2) {
      var canvasDiv = document.getElementById('canvasDiv');
      canvasDiv.style.display = "none";
      var gameOverDiv = document.getElementById('gameOver');
      gameOverDiv.style.display = "block";
      document.getElementById("time").innerHTML = timer();
      clearInterval (gameStateInterval);
    }
  }

  function timer () {
  time++;
  if (time/60 <= 1) {
    return time + ' сек.';
  }
  else if (time/60 >1) {
    return Math.floor(time/60) + ' : ' + time%60 + ' мин.';
    }
  }

  function reloadPage() {
  window.location.reload();
  }