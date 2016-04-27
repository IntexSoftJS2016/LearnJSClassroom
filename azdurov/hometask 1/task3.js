function numbers(){
    nextPrime:
    for (var i = 2; i < 10; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert( i );
    }
}

function numbers2() {
    for (var i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            alert( i );
        }
    }
}

function forWhile(){
    var i = 0;
    while (i < 3) {
        alert( "номер " + i + "!" );
        i++;
    }
}

function start(){
    numbers();
    numbers2();
    forWhile();
}

start();