(function() {
  "use strict";

  class Animal {
    constructor(name) {
      this.name = name;
      this.speed = 0;
    }

    eat() {
      alert(this.name + " eat spicy food!");
    }
    
    run(speed) {
      this.speed += speed;
      alert(this.name + " is running, speed " + this.speed);
    }
  }

  class Cat extends Animal {
    constructor() {
      super("Cat");
    }
    
    run(speed) {
      super.run(speed);
      alert(this.name + ": I love running!");
    }
  }

  class Dog extends Animal {
    constructor() {    
      super("Doge"); 
    }
    eat() {
      alert(this.name + " : Where is my dogefood?");
    }
  }

  let cat = new Cat();
  cat.eat();
  cat.run(15);

  let doge = new Dog();
  doge.eat();
  doge.run(7);
})();