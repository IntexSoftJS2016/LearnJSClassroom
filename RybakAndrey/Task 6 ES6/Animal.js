class Animal{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    eat(){
        return "I'm eat"
    }
}

class Dog extends Animal{
    eat(){
        alert(`${super.eat()} meat`);
    }
}

class Cat extends Animal{
    eat(){
        alert(`${super.eat()} fish`);
    }
}

let cat = new Cat("Kotya");
cat.eat();
alert(cat.getName());
let dog = new Dog("Myhtar");
dog.eat();
alert(dog.getName());