(function () {

	var plan = ["####################################################",
				"#                 ####         ****              ###",
				"#   *  @                     ########       OO    ##",
				"#   *              O O                 ****       *#",
				"#       ##*                        ##########     *#",
				"#      ##***  *         ****                     **#",
				"#* **  #  *  ***      #########                  **#",
				"#* **  #      *               #   *              **#",
				"#                     #   O   #  ***          ######",
				"#*            @       #       #   *        O  #    #",
				"#*                    #  ######                 ** #",
				"###          ****          ***                  ** #",
				"#       O                        @         O       #",
				"#   *     ##  ##  ##  ##               ###      *  #",
				"#   **         #              *       #####  O     #",
				"##  **  O   O  #  #    ***  ***        ###      ** #",
				"###               #   *****                    ****#",
				"####################################################"];

	function Vector(x, y) {
		this.x = x;
		this.y = y;
	}
	Vector.prototype.plus = function(other) {
	  	return new Vector(this.x + other.x, this.y + other.y);
	};

	function Grid(width, height) {
		this.space = new Array(width * height);
		this.width = width;
		this.height = height;
	}
	Grid.prototype.isInside = function(vector) {
		return vector.x >= 0 && vector.x < this.width &&
		    vector.y >= 0 && vector.y < this.height;
	};
	Grid.prototype.get = function(vector) {
	  	return this.space[vector.x + this.width * vector.y];
	};
	Grid.prototype.set = function(vector, value) {
	  	this.space[vector.x + this.width * vector.y] = value;
	};

	var directions = {
		"n":  new Vector( 0, -1),
		"ne": new Vector( 1, -1),
		"e":  new Vector( 1,  0),
		"se": new Vector( 1,  1),
		"s":  new Vector( 0,  1),
		"sw": new Vector(-1,  1),
		"w":  new Vector(-1,  0),
		"nw": new Vector(-1, -1)
	};

	function randomElement(array) {
	  	return array[Math.floor(Math.random() * array.length)];
	}

	var directionNames = "n ne e se s sw w nw".split(" ");

	function elementFromChar(legend, ch) {
	  	if (ch == " ")
	    	return null;
	  	var element = new legend[ch]();
	  	element.originChar = ch;
	  	return element;
	}

	function World(map, legend) {
		var grid = new Grid(map[0].length, map.length);
		this.grid = grid;
		this.legend = legend;

	  	map.forEach(function(line, y) {
	    	for (var x = 0; x < line.length; x++)
	      		grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
	  });
	}

	function charFromElement(element) {
		if (element == null)
			return " ";
		else
			return element.originChar;
	}

	World.prototype.toString = function() {
		var output = "";
		for (var y = 0; y < this.grid.height; y++) {
	    	for (var x = 0; x < this.grid.width; x++) {
				var element = this.grid.get(new Vector(x, y));
				output += charFromElement(element);
	    	}
	    output += "\n";
	  	}
	  	return output;
	};

	function Wall() {}


	Grid.prototype.forEach = function(f, context) {
	  for (var y = 0; y < this.height; y++) {
	    for (var x = 0; x < this.width; x++) {
			var value = this.space[x + y * this.width];
			if (value != null)
				f.call(context, value, new Vector(x, y));
	    }
	  }
	};

	World.prototype.turn = function() {
		var acted = [];
		this.grid.forEach(function(critter, vector) {
			if (critter.act && acted.indexOf(critter) == -1) {
			  	acted.push(critter);
			  	this.letAct(critter, vector);
			}
		}, this);
	};

	World.prototype.letAct = function(critter, vector) {
		var action = critter.act(new View(this, vector));
		if (action && action.type == "move") {
		    var dest = this.checkDestination(action, vector);
		    if (dest && this.grid.get(dest) == null) {
		      	this.grid.set(vector, null);
		      	this.grid.set(dest, critter);
	    }
	  }
	};

	World.prototype.checkDestination = function(action, vector) {
	  	if (directions.hasOwnProperty(action.direction)) {
		    var dest = vector.plus(directions[action.direction]);
		    if (this.grid.isInside(dest))
		      	return dest;
	  }
	};

	function View(world, vector) {
		this.world = world;
		this.vector = vector;
	}
	View.prototype.look = function(dir) {
		var target = this.vector.plus(directions[dir]);
		if (this.world.grid.isInside(target))
			return charFromElement(this.world.grid.get(target));
		else
			return "#";
	};
	View.prototype.findAll = function(ch) {
		var found = [];
		for (var dir in directions)
		if (this.look(dir) == ch)
			found.push(dir);
	  return found;
	};
	View.prototype.find = function(ch) {
		var found = this.findAll(ch);
		if (found.length == 0) return null;
		return randomElement(found);
	};

	function dirPlus(dir, n) {
		var index = directionNames.indexOf(dir);
		return directionNames[(index + n + 8) % 8];
	}

	function LifelikeWorld(map, legend) {
		World.call(this, map, legend);
	}
	LifelikeWorld.prototype = Object.create(World.prototype);

	var actionTypes = Object.create(null);

	LifelikeWorld.prototype.letAct = function(critter, vector) {
		var action = critter.act(new View(this, vector));
		var handled = action &&
		action.type in actionTypes &&
		actionTypes[action.type].call(this, critter,
		                              vector, action);
		if (!handled) {
		critter.energy -= 0.2;
		if (critter.energy <= 0)
		  this.grid.set(vector, null);
		}
	};

	actionTypes.grow = function(critter) {
		critter.energy += 0.5;
		return true;
	};

	actionTypes.move = function(critter, vector, action) {
		var dest = this.checkDestination(action, vector);
		if (dest == null ||
		  critter.energy <= 1 ||
		  this.grid.get(dest) != null)
		return false;
		critter.energy -= 1;
		this.grid.set(vector, null);
		this.grid.set(dest, critter);
		return true;
	};

	actionTypes.eat = function(critter, vector, action) {
		var dest = this.checkDestination(action, vector);
		var atDest = dest != null && this.grid.get(dest);
		if (!atDest || atDest.energy == null)
		return false;
		critter.energy += atDest.energy;
		this.grid.set(dest, null);
		return true;
	};

	actionTypes.reproduce = function(critter, vector, action) {
		var baby = elementFromChar(this.legend,
		                         critter.originChar);
		var dest = this.checkDestination(action, vector);
		if (dest == null ||
		  critter.energy <= 2 * baby.energy ||
		  this.grid.get(dest) != null)
		return false;
		critter.energy -= 2 * baby.energy;
		this.grid.set(dest, baby);
		return true;
	};

	function Plant() {
		this.energy = 3 + Math.random() * 4;
	}
	Plant.prototype.act = function(view) {
		if (this.energy > 15) {
		var space = view.find(" ");
		if (space)
		  return {type: "reproduce", direction: space};
		}
		if (this.energy < 20)
		return {type: "grow"};
	};

	function PlantEater() {
		this.energy = 20;
	}
	PlantEater.prototype.act = function(view) {
		var space = view.find(" ");
		if (this.energy > 60 && space)
		return {type: "reproduce", direction: space};
		var plant = view.find("*");
		if (plant)
		return {type: "eat", direction: plant};
		if (space)
		return {type: "move", direction: space};
	};


	/*Задача №18*/
	function SmartHerbivore() {
	  this.energy = 20;
	  this.direction = 'e';
	}
	SmartHerbivore.prototype.act = function(context) {
		var space = context.find(' ');
		var plant = context.find('*');

		if (context.look(this.direction) != ' ' && space)
			this.direction = space;

		if (space && this.energy > 57) 
		return {type: 'reproduce', direction: space};
		 

		var plants = context.findAll('*');
		if (plants.length > 1 && this.energy < 50) 
			return {type: 'eat', direction: plant};
		

		if (space && this.energy < 30 || this.energy > 50) 
			return {type: 'move', direction: space};
		

		if (!space)
			return {type: 'eat', direction: plants};
		return {type: 'move', direction: this.direction};
	};


	/*Задача №19*/
	function Carnivore() {
	  	this.energy = 100;
	  	this.direction = 'e';
	}
	Carnivore.prototype.act = function(context) {
	 	var space = context.find(' ');
	  	var plant = context.find('*');
	 	var critter = context.find('O');
	  	if (critter)
	   	 	return {type: 'eat', direction: critter};
		if (context.look(this.direction) != " " && space)
			this.direction = space;
	  	if (space && this.energy >= 190)
	    	return {type: 'reproduce', direction: space};
	  	if (space)
	  		return {type:'move', direction: space};
	  	return {type: 'move', direction: this.direction};
	};

	var world = new LifelikeWorld(plan,
		{"#": Wall,
		"@": Carnivore,
		"O": SmartHerbivore,
		"*": Plant});



	/* AnimatedWorld() from "Eloquent Javascript" */
	var active = null;

	function Animated(world) {
	this.world = world;
	var outer = (window.__sandbox ? window.__sandbox.output.div : document.body), doc = outer.ownerDocument;
	var node = outer.appendChild(doc.createElement("div"));
	node.style.cssText = "position: relative; width: intrinsic; width: fit-content;";
	this.pre = node.appendChild(doc.createElement("pre"));
	this.pre.appendChild(doc.createTextNode(world.toString()));
	this.button = node.appendChild(doc.createElement("div"));
	this.button.style.cssText = "position: absolute; bottom: 8px; right: -4.5em; color: white; font-family: tahoma, arial; " +
	  "background: #4ab; cursor: pointer; border-radius: 18px; font-size: 70%; width: 3.5em; text-align: center;";
	this.button.innerHTML = "stop";
	var self = this;
	this.button.addEventListener("click", function() { self.clicked(); });
	this.disabled = false;
	if (active) active.disable();
	active = this;
	this.interval = setInterval(function() { self.tick(); }, 333);
	}

	Animated.prototype.clicked = function() {
	if (this.disabled) return;
	if (this.interval) {
	  clearInterval(this.interval);
	  this.interval = null;
	  this.button.innerHTML = "start";
	} else {
	  var self = this;
	  this.interval = setInterval(function() { self.tick(); }, 333);
	  this.button.innerHTML = "stop";
	}
	};

	Animated.prototype.tick = function() {
	this.world.turn();
	this.pre.removeChild(this.pre.firstChild);
	this.pre.appendChild(this.pre.ownerDocument.createTextNode(this.world.toString()));
	};

	Animated.prototype.disable = function() {
	this.disabled = true;
	clearInterval(this.interval);
	this.button.innerHTML = "Disabled";
	this.button.style.color = "red";
	};

	window.animateWorld = function(world) { new Animated(world); };

	animateWorld(world);
})();
