/**
 * Created by Жека on 25.04.2016.
 */

var valley = [['•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '•'],
    ['•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•']];

var grass = new Object();
var wall = new Object();
//var predator = new Object();
grass.view = '❀';
wall.view = '▉';
//predator.view =
function PlantEater(grassCount, wallCount, plantEaterCount) {
    this.grassCount = grassCount;
    this.wallCount = wallCount;
    this.plantEaterCount = plantEaterCount;
    // this.position.x = xPos;
    //this.position.y = yPos;
    //this.view = "㋛";

    this.view = '㋛';
    /* get\set для счетчика травы*/
    this.setGrassCount = function (count) {
        if (count < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (count > valley.length - 40) {
            throw new Error("Нельзя засадить травы больше, чем " + valley.length - 40);
        }

        grassCount = count;
    };
    this.getGrassCount = function () {
        return grassCount;
    };

    /* get\set для счетчика стен*/
    this.setWallCount = function (count) {
        if (count < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (count > valley.length - 40) {
            throw new Error("Нельзя построить стен больше, чем " + valley.length - 40 - grassCount);
        }

        wallCount = count;
    };
    this.getWallCount = function () {
        return wallCount;
    };

    /* get\set для счетчика травоядных*/
    this.setPlantEaterCount = function (count) {
        if (count < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (count > valley.length - 40) {
            throw new Error("Нельзя породить травоядных больше, чем " + valley.length - 40 - wallCount);
        }

        plantEaterCount = count;
    };
    this.getPlantEaterCount = function () {
        return PlantEaterCount;
    };

    /* Устанавливаем элементы на поле*/
    /**
     *
     * @param {number}elementCount
     * @param element
     *
     */
    this.setElement = function (elementCount, element) {
        var rowCol, colCol;

        for (var count = 0; count < elementCount;) {
            rowCol = getRow();
            colCol = getCol();
            if (valley[rowCol][colCol] == " ") {
                /* заносим сущность в таблицу*/
                valley[rowCol][colCol] = element.view;
                count++;
            }
        }
    }

    /**
     *
     * @param element
     * @returns {Array}
     */
    function getPosition(element) {
        var elementPosition = [];

        for (var rowCount = 0; rowCount < valley.length; rowCount++) {
            for (var colCount = 0; colCount < valley[0].length; colCount++) {
                if (valley[rowCount][colCount] === element.view) {
                    /* Если в ячейке находится элемент, то заносим его координаты в массив*/
                    elementPosition.push([rowCount, colCount]);
                }
            }
        }
        return elementPosition;


    }

    /* проверяем соседние ячейки около травоядных*/
    /**
     *
     * @param row
     * @param column
     * @returns {Array}
     */
    function checkPosition(row, column) {
        var rand;
        /* количество направлений для элемента (верх, право, низ, лево)*/
        var direction = 4;
        /*массив для хранения пустых ячеек*/
        var emptyPosition = [];

        /* сверху */

        if (valley[row][column - 1] == " " || valley[row][column - 1] == grass.view) {
            /* Добавляем пустую ячейку в массив*/
            emptyPosition.push([row, column - 1])
        }
        /* справа*/
        if (valley[row + 1][column] == " " || valley[row + 1][column] == grass.view) {
            /* Добавляем пустую ячейку в массив*/
            emptyPosition.push([row + 1, column])
        }
        /* снизу*/
        if (valley[row][column + 1] == " " || valley[row][column + 1] == grass.view) {
            /* Добавляем пустую ячейку в массив*/
            emptyPosition.push([row, column + 1])
        }
        /* слева */
        if (valley[row - 1][column] == " " || valley[row - 1][column] == grass.view) {
            /* Добавляем пустую ячейку в массив*/
            emptyPosition.push([row - 1, column])
        }


        /* Выбираем из массива пустых ячеек рандомно любую и  перемещаем существо на нее*/
        rand = Math.floor(Math.random() * emptyPosition.length);
        /*  выбираем случайную пустую ячейку из массива  */
        return emptyPosition[rand];
    }

    /* Проверяет доступные ячейки для хищника */
    /**
     *
     * @param row
     * @param column
     * @returns {Array}
     */
    function checkPositionPredator(row, column) {
        var rand;
        /* количество направлений для элемента (верх, право, низ, лево)*/
        var direction = 4;
        /*массив для хранения доступных ячеек*/
        var emptyPosition = [];

        /* сверху */
        if (valley[row][column - 1] == " "  || valley[row][column - 1] == plantEater.view) {
            /* Добавляем доступную ячейку в массив*/
            emptyPosition.push([row, column - 1])
        }
        /* справа*/
        if (valley[row + 1][column] == " " || valley[row + 1][column] == plantEater.view) {
            /* Добавляем доступную ячейку в массив*/
            emptyPosition.push([row + 1, column])
        }
        /* снизу*/
        if (valley[row][column + 1] == " " || valley[row][column + 1] == plantEater.view) {
            /* Добавляем доступную ячейку в массив*/
            emptyPosition.push([row, column + 1])
        }
        /* слева */
        if (valley[row - 1][column] == " " || valley[row - 1][column] == plantEater.view) {
            /* Добавляем доступную ячейку в массив*/
            emptyPosition.push([row - 1, column])
        }
        /* Выбираем из массива доступных ячеек рандомно любую и  перемещаем существо на нее*/
        rand = Math.floor(Math.random() * emptyPosition.length);
        /*  выбираем случайную доступную ячейку из массива  */
        return emptyPosition[rand];
    }
    function moveElement(element) {
        /* будет хранить текущую позицию сущности*/
        var pos;
        var emptyCell;
        /* массив для хранения координат нашего существа*/
        var position = getPosition(element);
        for (var count = 0; count < position.length; count++) {
            pos = position[count];

            if(element.view == '♛')
            {
                emptyCell = checkPositionPredator(pos[0], pos[1]);
                if(valley[emptyCell[0]][emptyCell[1]]==plantEater.view)
                {
                    plantEaterCount--;
                }
            }
            else
            {
                emptyCell = checkPosition(pos[0], pos[1]);
            }
            if(valley[emptyCell[0]][emptyCell[1]]==grass.view)
            {
                grassCount --;
            }

            valley[emptyCell[0]][emptyCell[1]] = element.view;
            valley[pos[0]][pos[1]] = " ";
        }
        plantEater.showValley();
    }
    /* Устанавливаем интервал через который двигаем элементы */
    this.set = function () {
        setInterval(function () {
            moveElement(plantEater);moveElement(predator)
        }, 500);
    }
    /**
     *
     * @returns {number}
     */
    function getRow() {
        return Math.floor(Math.random() * (valley.length));
    }

    /**
     *
     * @returns {number}
     */
    function getCol() {
        return Math.floor(Math.random() * (valley[0].length));
    }

    /* Функция показа всех элементов*/
    this.showValley = function () {
        var div = document.createElement("div");
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        for (var rowCol = 0; rowCol < valley.length; rowCol++) {
            var row = document.createElement("tr");
            for (var colCol = 0; colCol < valley[0].length; colCol++) {
                var column = document.createElement("td");
                column.textContent = valley[rowCol][colCol];
                row.appendChild(column);
                div.innerHTML = "Осталось травы : "+ (grassCount)+ "\n\n";

                div.innerHTML +="Осталось Травоядных : " + plantEaterCount;
                // document.write("<td style='font-size: 22px; border: 1px solid black ;width:30px;height: 30px;'>" + valley[rowCol][colCol] + "</td>")
            }
            //  document.write("</tr>");
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        // document.write("</table>");
        document.getElementsByTagName("body")[0].innerHTML = '';
        document.getElementsByTagName("body")[0].appendChild(div);
        document.getElementsByTagName("body")[0].appendChild(table);

    }
}
function Predator(){
    this.view = '♛';
}
var plantEater = new PlantEater(10, 5, 10);
var predator = new Predator();
plantEater.setElement(10, grass);
plantEater.setElement(5, wall);
plantEater.setElement(10, plantEater);
//plantEater.setElement(3, predator);
plantEater.setElement(6,predator);
//setInterval(moveElement(plantEater),200);
plantEater.set();


//predator.set();
//plantEater.moveElement(plantEater);
//plantEater.moveElement(plantEater);

