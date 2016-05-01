var Rabbit = function () {
    Animal.apply(this,arguments)
    this.icon = "🐰";
};

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.move = function(){
  var row = this.position.row + getRandomValue(-1, 1);
  var column = this.position.column + getRandomValue(-1, 1);

  var currCell = this.polygon[this.position.row][this.position.column];

  if (!this.polygon[row][column].filter(el => el instanceof Wolf || el instanceof Wall || el instanceof Rabbit).pop()) {

          currCell.splice(currCell.indexOf(this), 1, new Empty({
              position: {
                  row: this.position.row,
                  column: this.position.column
              },
              polygon: this.polygon
          }));
      

      this.polygon[row][column].push(this);
      this.position.row = row;
      this.position.column = column;
  }
}
