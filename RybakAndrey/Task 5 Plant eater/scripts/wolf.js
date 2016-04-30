var Wolf = function () {
    Animal.apply(this,arguments);
    this.icon = "🐺";
};

Wolf.prototype = Object.create(Animal.prototype)



