var Plant = function (posX, posY) {
  var self = this;
  self.posX = posX; /* position on canvas in pixels */
  self.posY = posY; /* position on canvas in pixels */
  self.alive = true;
};

function plantsGrow () {
  var arr = findSpecificCells(blankSymbol, map);
  var targetCell = getRandomIndex(arr);
  if (targetCell != undefined) {
    var plant = new Plant (toPixels(targetCell.x), toPixels(targetCell.y));
    plants.push (plant);
    map[targetCell.x][targetCell.y] = plantSymbol;
  }
} /* creates new Plant object in random cell */

var Animal = function (posX, posY) {
  var self = this;
  self.posX = posX;
  self.posY = posY;
  self.energy = 20;
  self.age = 0;
  self.breedChance = 3;
  self.maxAge = 50;
  self.hungerLimit = 15;
  self.alive = true;
};

Animal.prototype.checkIfAlive = function () {
  var self = this;
  if (self.energy < 0 || self.age > self.maxAge) {
    self.die();
  }
};

Animal.prototype.die = function () {
  var self = this;
  self.alive = false;
  for (var key in self.selfArray) {
    if(self.selfArray[key].posX == self.posX &&
       self.selfArray[key].posY == self.posY) {
      map[toIndex(self.posX)][toIndex(self.posY)] = blankSymbol; /* delete symbol from map */
      //self.selfArray[key].alive = false;
      self.selfArray[key] = 0; /* delete object link from array */
    }
  }
  clearInterval (self.interval1);
  clearInterval (self.interval2);
  clearInterval (self.interval3);
  clearInterval (self.interval4);
  clearInterval (self.interval5);
};

Animal.prototype.becomeOlder = function () {
  var self = this;
  self.age++;
};

Animal.prototype.move = function () {
  var self = this;
    var targetCell = getRandomIndex(getNeighbourEmptyCells(self.posX, self.posY));
    var currentCell = new Cell(toIndex(self.posX), toIndex(self.posY));
    if (targetCell != undefined) {
      self.posX = toPixels(targetCell.x);
      self.posY = toPixels(targetCell.y);
      map[targetCell.x][targetCell.y] = self.selfSymbol;
      map[currentCell.x][currentCell.y] = blankSymbol;
    }
    self.energy--;
    /* spending energy after every step */
};

Animal.prototype.eat = function () {
  var self = this;
  if (self.energy <= self.hungerLimit && self.alive == true) {
    var targetFood = findFood(self.posX, self.posY, self.foodSymbol);
    if (targetFood != undefined) {
      deleteFood (targetFood, self.foodArray);
      self.energy += 5;
    }
  }
};

Animal.prototype.smartMove = function () {
  var self = this;
  var arr = findSpecificCells(self.foodSymbol, map);
  var distances = []; // [0] - nearest cell with food
  getDistances (arr, distances, self.posX, self.posY);

  if ( distances[0] != undefined) {
    var neighbourCells = getNeighbourEmptyCells(self.posX, self.posY);
    var targetDistances = []; // [0] - empty cell to move in
    getDistances(neighbourCells, targetDistances, toPixels(distances[0].x), toPixels(distances[0].y));

    if (targetDistances[0] != undefined) {
      var targetCell = targetDistances[0];
      var currentCell = new Cell(toIndex(self.posX), toIndex(self.posY));
      self.posX = toPixels(targetCell.x);
      self.posY = toPixels(targetCell.y);
      map[currentCell.x][currentCell.y] = blankSymbol;
      map[targetCell.x][targetCell.y] = self.selfSymbol;
    }
  }
  self.energy--; // spending energy after every step
};

var PlantEater = function () {
  var self = this;
  self.selfSymbol = plantEaterSymbol;
  self.selfArray = plantEaters;
  self.foodSymbol = plantSymbol;
  self.foodArray = plants;
  self.breedEnergy = 10;
  Animal.apply(self, arguments);
  self.interval1 = setInterval (self.becomeOlder.bind(self), 1000);
  self.interval2 = setInterval (self.chooseMovement.bind(self), 1000);
  self.interval3 = setInterval (self.checkIfAlive.bind(self), 1000/60);
  self.interval4 = setInterval (self.eat.bind(self), 1000);
  self.interval5 = setInterval (self.breed.bind(self), 3000);
};

PlantEater.prototype = Object.create (Animal.prototype);
PlantEater.prototype.constructor = PlantEater;

PlantEater.prototype.chooseMovement = function () {
  var self = this;
  if (self.alive == true && self.energy > self.hungerLimit) {
    self.move();
  } // random movement
  else if (self.alive == true && self.energy <= self.hungerLimit) {
    self.smartMove();
  } // smart movement if hungry
};

PlantEater.prototype.breed = function () {
  var self = this;
  if (self.alive == true && self.energy > self.breedEnergy) {
    var neighbourExistance = findNeighbours(self.posX, self.posY, plantEaterSymbol);
    var neighbourEmptyCells = getNeighbourEmptyCells(self.posX, self.posY);
    var chance = getChance (self.breedChance);
    if (neighbourExistance != undefined &&
      neighbourEmptyCells.length >= 3 && chance == 1) {
      var targetCell = getRandomIndex(neighbourEmptyCells);
      if (targetCell != undefined) {
        var plantEater = new PlantEater (toPixels(targetCell.x), toPixels(targetCell.y));
        self.selfArray.push (plantEater);
        map[targetCell.x][targetCell.y] = self.selfSymbol;
      }
    }
  }
};

var Predator = function () {
  var self = this;
  Animal.apply(self, arguments);
  self.selfSymbol = predatorSymbol;
  self.selfArray = predators;
  self.foodSymbol = plantEaterSymbol;
  self.foodArray = plantEaters;
  self.breedEnergy = 5;
  self.breedChance = 2;
  self.maxAge = 30;
  self.energy = 15;
  self.hungerLimit = 10;
  self.interval1 = setInterval (self.becomeOlder.bind(self), 1000);
  self.interval2 = setInterval (self.smartMove.bind(self), 2000);
  self.interval3 = setInterval (self.eat.bind(self), 2000);
  self.interval4 = setInterval (self.breed.bind(self), 7000);
  self.interval5 = setInterval (self.checkIfAlive.bind(self), 1000/60);
}

Predator.prototype = Object.create (Animal.prototype);
Predator.prototype.constructor = Predator;

Predator.prototype.breed = function () {
  var self = this;
    if (self.alive == true && self.energy > self.breedEnergy) {
    var neighbourExistance = findNeighbours(self.posX, self.posY, predatorSymbol);
    var neighbourEmptyCells = getNeighbourEmptyCells(self.posX, self.posY);
      var chance = getChance (self.breedChance);
    if (neighbourExistance != undefined &&
      neighbourEmptyCells.length >= 3 && chance == 1) {
      var targetCell = getRandomIndex(neighbourEmptyCells);
      if (targetCell != undefined) {
        var predator = new Predator (toPixels(targetCell.x), toPixels(targetCell.y));
        self.selfArray.push (predator);
        map[targetCell.x][targetCell.y] = self.selfSymbol;
      }
    }
  }
};