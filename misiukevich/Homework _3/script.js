function ifElse1() {
    var result;
    var value = prompt('Введите число', 0);
    var result = value + " знак числа: "
    if (value > 0) {
        result += "+";
    } else if (value < 0) {
        result += "-";
    } else {
        result += "0";
    }
    document.getElementById('if-else1').innerHTML = result;
}

function ifElse2() {
    // var message;
    //
    // if (login == 'Вася') {
    //     message = 'Привет';
    // } else if (login == 'Директор') {
    //     message = 'Здравствуйте';
    // } else if (login == '') {
    //     message = 'Нет логина';
    // } else {
    //     message = '';
    // }
    var login = prompt('Введите логин', 'Вася');
    var message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
    document.getElementById('if-else2').innerHTML = message;
}

function ifElse3(a, b) {
    // if (a + b < 4) {
    //     result = 'Мало';
    // } else {
    //     result = 'Много';
    // }
    var result = (a + b < 4) ? 'Мало' : 'Много';
    document.getElementById('if-else3').innerHTML = result;
}

function loop1() {
    // for (var i = 0; i < 3; i++) {
    //     alert("номер " + i + "!");
    // }
    var result = ""
    var i = 0;
    while (i < 3) {
        result += i + " ";
        i++;
    }
    document.getElementById('loop1').innerHTML = result;
}

function loop2() {
    var result = ""
    for (var i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            result += i + " ";
        }
    }
    document.getElementById('loop2').innerHTML = result;
}

//start = int
//end = int
function loop3(start, end) {
    var result = ""
    for (var i = start; i < end; i++) {
        if (isPrime(i)) result += i + " ";
    }

    document.getElementById('loop3').innerHTML = result;
}

function isPrime(n) {
    if (n == 1) // 1 - не простое число
        return false;
    // перебираем возможные делители от 2 до sqrt(n)
    for (d = 2; d * d <= n; d++) {
        // если разделилось нацело, то составное
        if (n % d == 0)
            return false;
    }
    // если нет нетривиальных делителей, то простое
    return true;
}


function start() {
    ifElse1();
    ifElse2();
    ifElse3(2, 4);
    loop1();
    loop2();
    loop3(2, 10);
}

start();
