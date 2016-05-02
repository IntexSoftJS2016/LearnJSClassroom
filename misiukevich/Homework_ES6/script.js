'use strict';

class Animal {
    constructor(name, color, enemy) {
        this.name = name;
        this.color = color;
        this.enemy = enemy;
    }

    eat() {
        console.log(this.name + ' ест.');
    }

    run() {
        console.log(this.name + ' ест.');
    }
}

class Cat extends Animal {
    eat() {
        console.log(this.color + ' кот ' + this.name + ' ест.');
    }

    run() {
        console.log('Кот ' + this.name + ' убегает от ' + this.enemy.name);
    }
}

class Dog extends Animal {
    eat() {
        console.log('Собака ' + this.name + ' ест.');
    }
}

let animal = new Animal('Животное');
animal.eat();

let dog = new Dog('Мухтар', 'Черный');
dog.eat();


let cat = new Cat('Матроскин', 'Серый', dog);
cat.eat();
cat.run();

