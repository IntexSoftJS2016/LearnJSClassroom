/**
 * Created by Natalie on 4/25/2016.
 */
function getNeighbourEmptyCells (posX, posY) {
  var directions = getNeighbourPositions (toIndex(posX), toIndex(posY));
  var emptyCells = [];
  for (var i=0;i<directions.length; i++) {
    if (map[directions[i].x][directions[i].y] == blankSymbol) {
      emptyCells.push (directions[i]);
    }
  }
  return emptyCells;
} /* returns array with neighbour empty cells */

function findFood(posX, posY, symbol) {
  var directions = getNeighbourPositions (toIndex(posX), toIndex(posY));
  var neighbourPlants = [];
  for (var i=0;i<directions.length;i++) {
    if (map[directions[i].x][directions[i].y] == symbol) {
      neighbourPlants.push (directions[i]);
    }
  }
  return getRandomIndex(neighbourPlants);
} /*returns random plant in neighbour cell */

function findNeighbours(posX, posY, symbol) {
  var neighbours = getNeighbourPositions (toIndex(posX), toIndex(posY));
  for (var i=0;i<neighbours.length;i++) {
    if (map[neighbours[i].x][neighbours[i].y] == symbol) {
      return neighbours[i];
    }
  }
} /* returns neighbour cell containing animal*/

function deleteFood (targetFood, array) {
  for (var key in array) {
    if (array[key].posX == toPixels(targetFood.x) &&
      array[key].posY == toPixels (targetFood.y)) {
      map[targetFood.x][targetFood.y] = blankSymbol; /* delete symbol from map */
      array[key].alive = false;
      array[key] = 0; /* delete object link from array */
    }
  }
}

function getNeighbourPositions (x, y) {
  var top = {x: x - 1, y: y};
  var topRight = {x: x - 1, y: y + 1};
  var right = {x: x, y: y + 1};
  var rightBottom = {x: x + 1, y: y + 1};
  var bottom = {x: x + 1, y: y};
  var bottomLeft = {x: x + 1, y: y - 1};
  var left = {x: x, y: y - 1};
  var leftTop = {x: x - 1, y: y - 1};
  return [top, topRight, right, rightBottom, bottom, bottomLeft, left, leftTop];
} /* returns all neighbour cells of the current cell */

function getDistances (array, targetArray, posX, posY) {
  for (var i = 0; i < array.length; i++) {
    var distance = Math.abs(array[i].x - toIndex(posX)) + Math.abs(array[i].y - toIndex(posY));
    targetArray.push({distance: distance, x: array[i].x, y: array[i].y});
  }
  targetArray.sort(function (b, a) {
    return (b.distance - a.distance);
  }); /* sort array by minimum distance */
}

function getChance (number) {
  return Math.floor(Math.random()*number + 1);
}

function toPixels(number) {
  return number * CELL_SIZE;
}/* convert given number to pixels */

function toIndex(number) {
  return number / CELL_SIZE;
}/* convert given number to indexes */