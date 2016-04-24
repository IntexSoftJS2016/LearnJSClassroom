(function () {

/* Карта мира */
var map = [	"####################################################",
            "#                 ####                           ###",
            "#         ##                 ########             ##",
            "#        ##                                        #",
            "#       ##                         ##########      #",
            "#      ##                                          #",
            "#      #              #########                    #",
            "#     #                      #                     #",
            "#     ##              #       #               ######",
            "#                     #       #               #    #",
            "#                     #  ######                    #",
            "###                                                #",
            "#                                                  #",
            "#         ##  ##  ##  ##               ###         #",
            "#              #                      #####        #",
            "##             #  #                    ###         #",
            "###               #                                #",
            "####################################################"];
            
/* Инициализация */
var turn = 0;
var plants = new Plants();
var cows = new Cows();
var tigers = new Tigers();

/*Конструктор рандомных координат*/
function RandomCoords() {
	var x, y;
	this.setXY = function() {
	    	do {
		        x = Math.round(1 - 0.5 + Math.random() * 50);
		        y = Math.round(1 - 0.5 + Math.random() * 16);
	    	} while(map[y][x] != " ");
	};

	this.getX = function() {
		return x;
	}
	this.getY = function() {
		return y;
	}
}

/*Конструкторы существ*/
function Plants() {
	var coord = new RandomCoords();
	var type = "*";
	this.create = function() {
		var count = +prompt("Введите количество растений");

		for (var i = 0; i < count; i++) {
	  		coord.setXY();
	    	fillWithCreatures(coord.getX(), coord.getY(), type);
	  	}    	
	};
}


function Cows() {
	var coord = new RandomCoords();
	var type = "O";
	this.create = function() {
		var count = +prompt("Введите количество коровок");

		for (var i = 0; i < count; i++) {
	  		coord.setXY();
	    	fillWithCreatures(coord.getX(), coord.getY(), type);
	  	}    	
	};
}

function Tigers() {
	var coord = new RandomCoords();
	var type = "@";
	this.create = function() {
		var count = +prompt("Введите количество тигров");

		for (var i = 0; i < count; i++) {
	  		coord.setXY();
	    	fillWithCreatures(coord.getX(), coord.getY(), type);
	  	}    	
	};
}

/*Заполняет карту существами типа creatureType*/
function fillWithCreatures(x, y, creatureType) {
	var a = map[y].split("");
    a.splice(x, 1, creatureType);
    map.splice(y,1, a.join(""));
    
    return map;
}

/* Вывожу заполненный мир */
function drawWorld(map) {
	
	plants.create();
	cows.create();
	tigers.create();

	for (var i = 0; i < map.length; i++) {
		document.getElementById("output").innerHTML += map[i] + "<br>";
	}
}

drawWorld(map);
})();