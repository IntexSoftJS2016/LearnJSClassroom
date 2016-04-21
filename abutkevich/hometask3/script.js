/* Проверка стандарта

 Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
 Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
 */
function askName() {
    var answer = prompt('Каково «официальное» название JavaScript?', '');
    if (answer === "EcmaScript") {
        alert('Верно!');
    }
    else {
        alert('Не знаете? "EcmaScript"');
    }
}
/*Проверка логина

 Напишите код, который будет спрашивать логин (prompt).

 Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит
 что-то другое – «Я вас не знаю».
 Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен»,
 при отмене – «Вход отменён».*/

function checkLogin() {
    var answer = prompt('Кто пришел?', '');

    if (answer === "Админ") {
        var password = prompt('Пароль?', '');
        if (password === "Черный властелин") {
            alert("Добро пожаловать!");
        }
        else if (password === null) {
            alert("Вход отменен");
        }
        else {
            alert("Пароль неверен");
        }
    }
    else if (answer === null) {
        alert("Вход отменен");
    }
    else {
        alert("Я вас не знаю");
    }
}

/*Перепишите if с использованием оператора '?':

 if (a + b < 4) {
 result = 'Мало';
 } else {
 result = 'Много';
 }
 */

function checkNumbers() {
    var a = 2, b = 3;

    a + b < 4 ? result = 'Мало' : result = "Много";

    alert(result);
}

/*При помощи цикла for выведите чётные числа от 2 до 10.*/

function getEvenNumbers() {
    var number;
    for (i = 1; i <= 10; i++) {
        if (i % 2 === 0) alert(i);
    }
}
/*Повторять цикл, пока ввод неверен

 Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить
 ввести ещё раз, и так далее.
 Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
 Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче
 необязательно.*/
function checkInput() {
    var input;
    do {
        input = prompt("Введите число больше 100", '');
    }
    while (input >= 100 && input === null);
}
/*Перепишите код, заменив цикл for на while, без изменения поведения цикла.
 for (var i = 0; i < 3; i++) {
 alert( "номер " + i + "!" );
 }*/
function changeLoop() {
    var i = 0;
    while (i < 3) {
        alert("номер " + i + "!");
        i++;
    }
}

function start(){
    askName();
    checkLogin();
    checkNumbers();
    getEvenNumbers();
    checkInput();
    changeLoop();
}

start();