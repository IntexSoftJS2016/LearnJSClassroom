/**
 * Created by Жека on 19.04.2016.
 */

/* Метод нахождения четных чисел
 @param {number}
 */

function numbers() {
    for (var count = 2; count <= 10; count++) {
        if (count % 2 === 0) {
            alert(count);
        }
    }
}
function checknumbers() {
    do {
        var number = prompt("Введите число > 100", 0);

    } while (number <= 100 || number === null)
}

function forWhile() {
    document.write("<pre>for (var i = 0; i < 3; i++) </pre> ");
    var count = 0;
    while (count < 3) {
        alert("номер " + count + "!");
        count++;
    }

}
function show1(i) {


    var k = i;

    function inc() {
        alert(k);
    }

    inc();
}
/* @return тип возвращаемое значение */
function shows(i) {

    return function () {
        if (i > 0) {
            return "+";
        }
        else return "-";
    }
}
var a1 = shows(1);
var a2 = shows(-1);
//alert(a1());
//alert(a2());

}

/* Created by Жека on 20.04.2016.
 */
