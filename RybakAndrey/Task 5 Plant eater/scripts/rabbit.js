var Rabbit = function (map, positionX, positionY) {
    Animal.apply(this,arguments)
    this.icon = "🐰";
};

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.createObjects = function () {
    var rabbits = [];
    for(var i = 0; i < 20; i++){
        rabbits.push(new Rabbit());
    }
    return rabbits;
};

function setPosition (rabbits) {
    for(var i=0; i<rabbits.length; i++){
        var position;
        do{
            position = generateRandomPosition();
        }
        while(!checkPosition(position.randomPositionRow,position.randomPositionColumn));

        rabbits[i].positionRow = position.randomPositionRow;
        rabbits[i].positionColumn = position.randomPositionColumn;
    }
    return rabbits;
}

function generateRandomPosition(){
    var position = {
        randomPositionRow : getRandomValue(1, MAP_HEIGHT - 1),
        randomPositionColumn : getRandomValue(1, MAP_WIDTH - 1)
    };
    return  position;
}

function checkPosition(positionRow,positionColumn) {
    if(map[positionRow][positionColumn] == EMPTY){
        return true;
    }
    return false;
}

Rabbit.prototype.setOnMap = function () {

};


