var WALL = "⛔";
var FLOWER = "✿";
var EMPTY = " ";

var MAP_WIDTH = 40;
var MAP_HEIGHT = 20;

function createMap() {
    var map = initMap();
    map = fillMapBorders(map);
    map = fillMapFlowers(map);
    renderMap(map);
    return map;
}

function initMap() {
    var map = [];
    for (var i = 0; i < MAP_HEIGHT; i++) {
        map[i] = [];
        for (var j = 0; j < MAP_WIDTH; j++) {
            map[i][j] = EMPTY;
        }
    }
    return map;
}

function fillMapBorders(map) {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[0].length; j++) {
            if (i == 0 || j == map[0].length - 1 || i == map.length - 1 || j == 0) {
                map[i][j] = WALL;
            }
        }
    }
    return map;
}

function fillMapFlowers(map) {
    var flowersCount = Math.round(( (MAP_HEIGHT * MAP_WIDTH) - (MAP_HEIGHT + MAP_WIDTH) ) / 5);

    for (var count = 0; count < flowersCount;) {
        var randomRow = getRandomValue(1, MAP_HEIGHT - 1);
        var randomColumn = getRandomValue(1, MAP_WIDTH - 1);

        if (map[randomRow][randomColumn] == EMPTY) {
            map[randomRow][randomColumn] = FLOWER;
            count++;
        }
    }
    return map;
}

function renderMap(map) {
    var rootDiv = document.getElementsByClassName("map")[0];
    var table = document.createElement("table");
    for (var i = 0; i < map.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < map[0].length; j++) {
            var column = document.createElement("td");
            column.textContent = map[i][j];
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    if (rootDiv.childNodes.length > 0) {
        rootDiv.removeChild(rootDiv.childNodes[0]);
    }
    rootDiv.appendChild(table);
}

function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
