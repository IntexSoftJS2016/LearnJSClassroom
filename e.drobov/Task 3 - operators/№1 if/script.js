/**
 * Created by Жека on 19.04.2016.
 */
function whatIsJs() {
    var check = prompt("Каково «официальное» название JavaScript?", "");
    if (check === "ECMAScript") {
        alert("Верно");
    } else {
        alert("Не знаете? «ECMAScript»!");
    }
}
function checkLogin(){
    var checkLogin = prompt("Кто пришел?","");
    alert(checkLogin);
    switch (checkLogin)
    {
        case "null":
            alert("Я Вас не знаю");
            break;
        case "Админ":
            var password = prompt("пароль?","");
            if(password==="Черный Властелин"){
                alert("Добро пожаловать!");
                break;
            }
            else if(password==="null"){
                alert("Вход отменен"); break;
            }else alert("Пароль неверен"); break;
        default: alert("Вход отменен");break;
    }
}

function formula(){
    document.write("<pre>if (a + b < 4) {result = /'Мало'/;} else { result = /'Много'/;} ");
    alert("(a+b)<4?'Мало':'Много'");

}