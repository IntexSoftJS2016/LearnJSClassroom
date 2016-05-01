var Wolf = function () {
    Animal.apply(this, arguments);
    this.icon = "🐺";
};

Wolf.prototype = Object.create(Animal.prototype)

Wolf.prototype.move = function() {
    var row = this.position.row + getRandomValue(-1, 1);
    var column = this.position.column + getRandomValue(-1, 1);

    var currCell = this.polygon[this.position.row][this.position.column];

    if (!this.polygon[row][column].filter(el => el instanceof Wolf || el instanceof Wall).pop()) {
        if (currCell.filter(el => el instanceof Flower).pop()) {
            currCell.splice(currCell.indexOf(this), 1);
        } else {
            currCell.splice(currCell.indexOf(this), 1, new Empty({
                position: {
                    row: this.position.row,
                    column: this.position.column
                },
                polygon: this.polygon
            }))
        }

        this.polygon[row][column].push(this);
        this.position.row = row;
        this.position.column = column;
    }
}
