class animal {
    constructor(color) {
        this.color = "default";
    }
    eat() {
        console.log('Animal eats');
    }
}

class dog extends animal {
    eat() {
        console.log('Dog eats');
    }
}

class cat extends animal {
    eat() {
        console.log('Cat eats');
    }
}

new animal().eat();
new dog().eat();
new cat().eat();