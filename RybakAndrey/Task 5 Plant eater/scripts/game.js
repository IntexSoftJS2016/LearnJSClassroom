var Game = function(config){
  this.polygon = [];
  this.config = config;

  this._createPolygon = function(){
    for(var i=0; i<this.config.height; i++){
      this.polygon.push([]);
      for(var j=0; j<this.config.width; j++){
        var config = {
          position:{
            row: i,
            column: j
          },
          polygon: this.polygon
        };
        if (i == 0 || j == this.config.width - 1 || i == this.config.height - 1 || j == 0) {
            this.polygon[i].push([getItem(ItemTypes.WALL)]);
        }else{
            this.polygon[i].push([getItem(ItemTypes.EMPTY, config)]);
        }
      }
    }
  };

  this._getIcon = function(cell){
    var wolf = cell.filter(el => el instanceof Wolf ).pop();
    if(wolf){
      return wolf.icon;
    }
    return cell[0].icon;
  };

  this.init = function(){
    this._createPolygon();
    this._pushObjects(ItemTypes.FLOWER, 0.2);
    this._pushObjects(ItemTypes.WOLF, 0.05);
    this._pushObjects(ItemTypes.RABBIT, 0.2);
    this.render();
  };

  this._makeIteration = function(){
    var rabbits = document.getElementById("rabbits");
    var wolves = document.getElementById("wolves");
    var flowers = document.getElementById("flowers");
    var wolvesCount = 0;
    var rabbitsCount = 0;
    var flowersCount = 0;

    for(var i=0; i<this.config.height; i++){
      for(var j=0; j<this.config.width; j++){
        this.polygon[i][j].forEach(el => {
          if(el instanceof Animal) el.move();
        })
      }
    }

    for(var i=0; i<this.config.height; i++){
      for(var j=0; j<this.config.width; j++){
        var rabbit = this.polygon[i][j].filter(el => el instanceof Rabbit).pop()
        var wolf = this.polygon[i][j].filter(el => el instanceof Wolf).pop()
        var flower = this.polygon[i][j].filter(el => el instanceof Flower).pop()
        if(this.polygon[i][j].length > 1){
          this.polygon[i][j].forEach(el=>{
            if(el instanceof Empty) this.polygon[i][j].splice(this.polygon[i][j].indexOf(el), 1)
          })
        }
        if(rabbit && wolf){
          this.polygon[i][j].splice(this.polygon[i][j].indexOf(rabbit), 1);
        }
        if(rabbit && flower){
          this.polygon[i][j].splice(this.polygon[i][j].indexOf(flower), 1)
        }

        this.polygon[i][j].forEach(el=>{
          if(el instanceof Wolf) wolvesCount++;
          if(el instanceof Rabbit) rabbitsCount++;
          if(el instanceof Flower) flowersCount++;
        })
      }
    }
    rabbits.value = "";
    wolves.value = "";
    flowers.value = "";

    rabbits.value = "Rabbits: " + rabbitsCount;
    wolves.value += "Wolves: " + wolvesCount;
    flowers.value += "Flowers: " + flowersCount;

  };

  this.start = function() {
    this.init();
    setInterval(() => {
      this._makeIteration();
      this.render();
    }, 1000);
  };

  this._pushObjects = function(type, coeff){
    var count = Math.round(( (this.config.height * this.config.width) - ((this.config.height + this.config.width)*2) ) * coeff);
    while(count) {
        var randomRow = getRandomValue(1, this.config.height - 1);
        var randomColumn = getRandomValue(1, this.config.width - 1);
        if (this.polygon[randomRow][randomColumn][0] instanceof Empty) {
          var config = {
            position:{
              row: randomRow,
              column: randomColumn
            },
            polygon: this.polygon
          };
            this.polygon[randomRow][randomColumn] = [getItem(type, config)]
            count--;
        }
    }
  };

  this.render = function(){
    var rootDiv = document.getElementsByClassName("map")[0];
    var table = document.createElement("table");
    for (var i = 0; i < this.polygon.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < this.polygon[0].length; j++) {
            var column = document.createElement("td");
            column.textContent = this._getIcon(this.polygon[i][j]);
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    if (rootDiv.childNodes.length > 0) {
        rootDiv.removeChild(rootDiv.childNodes[0]);
    }
    rootDiv.appendChild(table);
  };
};


