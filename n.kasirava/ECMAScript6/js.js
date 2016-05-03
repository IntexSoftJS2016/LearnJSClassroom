/**
 * Created by Natalie on 4/27/2016.
 */
'use strict';

class Animal {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
  eat() {
    console.log ('Животное ест');
  }
}

class Cat extends Animal {
  eat () {
    console.log (this. color + ' кот ' +this.name+ ' ест');
  }
}

class Dog extends Animal {
  eat () {
    console.log ('Собака ' +this.name+ ' ест');
  }
}

let animal = new Animal('Зверь', 'Черный');
animal.eat();
let cat = new Cat('Васька', 'Серый');
cat.eat();
let dog = new Dog('Шарик', 'Рыжий');
dog.eat();