function startPlanet() {
    var planet = getPlanet();
    planet = move(planet);
    renderMatrix(planet)
}

function renderMatrix(planet) {
    var rootDiv = document.getElementsByClassName("matrix")[0];
    var table = document.createElement("table");
    for (var i = 0; i < planet.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < planet[0].length; j++) {
            var column = document.createElement("td");
            column.textContent = planet[i][j];
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    rootDiv.appendChild(table);
}


function getPlanet() {
    return       [  "############################",
                    "#####WWWWWWWWWWWRRRRRR######",
                    "##   ***                **##",
                    "#   *##** W       **  R  *##",
                    "#    ***     R    ##**    *#",
                    "#       R         ##***    #",
                    "#                 ##**     #",
                    "#   R       #*             #",
                    "#*      W   #**       R    #",
                    "#***        ##**    R    **#",
                    "##****     ###***       *###",
                    "############################"];
}

function move(planet) {
    var tempPlanet = planet.slice();
    var animal;
    for(var i=0;i<planet.length;i++){
        for(var j=0;j<planet[0].length;j++){
            var x = i+getRandomInt(-1,1), y = j+getRandomInt(-1,1);
            if(planet[i][j]=="R"){
                animal = "Rabbit";
                if(checkStep(tempPlanet[x][y],animal)){
                    makeMove(tempPlanet,i,j,x,y,animal)
                }else{

                }
            }else if (planet[i][j]=="W"){
                animal = "Wolf";
                if(checkStep(tempPlanet[x][y],animal)){
                    makeMove(tempPlanet,i,j,x,y,animal)
                }else{

                }
            }
        }
    }
    planet = tempPlanet.slice("");
    return planet;
}

function generateRabbit(planet){

}

function makeMove(tempPlanet,i,j,x,y,animal) {
    var symbol1, symbol2;
    if (animal=="Rabbit") {
        symbol1 = tempPlanet[i].split("");
        symbol1[j] = " ";
        tempPlanet[i] = symbol1.join("");

        symbol2 = tempPlanet[x].split("");
        symbol2[y] = "R";
        tempPlanet[x] = symbol2.join("");
    }else if(animal=="Wolf"){
        symbol1 = tempPlanet[i].split("");
        symbol1[j] = " ";
        tempPlanet[i] = symbol1.join("");

        symbol2 = tempPlanet[x].split("");
        symbol2[y] = "W";
        tempPlanet[x] = symbol2.join("");
    }
}


function checkStep(tempPlanet,animal) {
    if(animal=="Rabbit") {
        if (tempPlanet == "#" || tempPlanet=="W" || tempPlanet=="R") {
            return false;
        }else{
            return true;
        }
    }else if(animal=="Wolf"){
        if (tempPlanet == "#" || tempPlanet=="W") {
            return false;
        }else{
            return true;
        }
    }
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
