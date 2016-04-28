function moveObjects(object) {
    for (var i = 0; i < object.count; i++) {
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