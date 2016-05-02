try {
    function runTheLifeOfTheWorld() {
        moveObjects(hunter);
        moveObjects(plantEater);
        if (Math.random() > 0.8) {
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

function moveObjects(object) {
    for (var objIndex = 0; objIndex < object.count; objIndex++) {
        /*случайное направление движения*/
        var shiftX = 0, shiftY = 0;
        var x = object.positions[0][objIndex];
        var y = object.positions[1][objIndex];
        var randomDirection = getRandom(1, 5);
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
        else if ((world[x + shiftX][y + shiftY] != hunter.design || (!object.aggressive &&
            world[x + shiftX][y + shiftY] != plant.design)) && world[x + shiftX][y + shiftY] != wall) {
            /*то переместить объект*/
            object.positions[0][objIndex] += shiftX;
            object.positions[1][objIndex] += shiftY;
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
                    if (object.positions[0][objIndex] == plantEater.positions[0][j] &&
                        object.positions[1][objIndex] == plantEater.positions[1][j]) {
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

/*
* вывод "мира" на экран
* */
function showWorld() {
    document.write("Травоядных: " + plantEater.count + ", Хищников: " + hunter.count + ", Растений: " + plant.count);
    document.write("<table>");
    for (var rowIndex = 0; rowIndex < worldSize; rowIndex++) {
        document.write("<tr>");
        for (var colIndex = 0; colIndex < worldSize; colIndex++) {
            document.write("<td>" + world[rowIndex][colIndex] + "</td>");
        }
    }
    document.write("</table>");
}