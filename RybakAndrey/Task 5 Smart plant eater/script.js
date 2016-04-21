function startPlanet() {
    var planet = getPlanet();
    setInterval(function (){
        planet = move(planet);
        renderMatrix(planet);
    },100);
}


function getPlanet() {
    return       [  "############################",
                    "#####  R  W  W  RRR  R######",
                    "##   ***       RRR WWW  **##",
                    "#   *##** W    W  **  R  *##",
                    "#  R ***WWW  R    ##**    *#",
                    "# R R W WRW       ##***    #",
                    "# W   R  R WWW    ##** W   #",
                    "#   R   W   #*   R  R W R  #",
                    "#*  W   W   #**    W  R    #",
                    "#***   RRR   ##**    R   **#",
                    "##****     ###***  RW   *###",
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
    if(rootDiv.childNodes.length>0){
        rootDiv.removeChild(rootDiv.childNodes[0]);
    }
    rootDiv.appendChild(table);
}


function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}