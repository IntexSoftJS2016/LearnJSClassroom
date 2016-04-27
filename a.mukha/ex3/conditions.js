/* Используя конструкцию if..else, напишите код, который будет спрашивать:
 «Каково «официальное» название JavaScript?».
Если посетитель вводит «ECMAScript», то выводить «Верно!»,
 если что-то другое – выводить «Не знаете? «ECMAScript»!». */

 function checkStandart() {
 	var answer = prompt("Каково «официальное» название JavaScript?", "");
 	if (answer === "ECMAScript") 
 		alert("Верно");
 	else
 		alert("Не знаете? 'ECMAScript'!");
 }

 checkStandart();

 /* Напишите код, который будет спрашивать логин (prompt).

	Если посетитель вводит «Админ», то спрашивать пароль, 
	если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

	Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!»,
	 иначе – «Пароль неверен», при отмене – «Вход отменён». */

function loginCheck() {
	var userLogin = prompt("Введите логин: ", ""),
		userPassword;

	if (userLogin === "Админ") {
		userPassword = prompt("Введите пароль: ", "");
		if (userPassword === "Черный Властелин") 
			alert("Добро пожаловать!");
		else if(userPassword === null) 
			alert("Вход отменён");
		else 
			alert("Пароль неверен");		
	} else if (userLogin === null) {
		alert("Вход отменён");
	} else {
		alert("Я вас не знаю");
	}
}

loginCheck();

/* 	Перепишите if..else с использованием нескольких операторов '?'.

	Для читаемости – оформляйте код в несколько строк. 

	var message;

	if (login == 'Вася') {
	  message = 'Привет';
	} else if (login == 'Директор') {
	  message = 'Здравствуйте';
	} else if (login == '') {
	  message = 'Нет логина';
	} else {
	  message = '';
	} */

function greetingMessage(login) {
	var message;

	login == 'Вася' ? message = 'Привет' :
		login == 'Директор' ? message = 'Здравствуйте' :
			login == '' ? message = 'Нет логина' : message = '';

	return message;
}

var login = prompt("Введите 'Вася', 'Директор' или любое другое значение", "");
alert(greetingMessage(login));