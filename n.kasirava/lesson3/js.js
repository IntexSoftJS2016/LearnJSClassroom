        var askJavaScriptName = function () {
            
            var answer = prompt('Каково «официальное» название JavaScript?');
            
            if (answer!= undefined && answer.toLowerCase()==='ecmascript') {
                alert ('Верно!');
            }
            
            else {
                alert ('Не знаете? «ECMAScript»!');
            }
                        
        }
        
        var getNumberSign = function () {
            
            var number = prompt('Введите число');
            
            if (number > 0) {
                alert ('Положительное');
            }
            
            else if (number < 0) {
                alert ('Отрицательное');
            }
            
            else if (number === '0') {
                alert ('Ноль');
            }
            
            else {
                alert ('Введено неверное значение!');
            }
            
        }
        
        var checkLogin = function () {
            
            var login = prompt('Введите логин');
            
            if (login == undefined) {
                alert ('Вход отменен');
            }
            
            else if (login.toLowerCase()==='админ') {
                
                var password = prompt('Введите пароль');
                
                if (password === 'пароль') { 
                    alert ('Добро пожаловать!');
                }
                
                else if (password == undefined) {
                    alert ('Вход отменен');
                }
                
                else {
                    alert ('Неверный пароль!');
                }
                
            }
            
            else {
                alert ('Я вас не знаю');
            }
                       
        }
        
        var findEvenNumbers = function () {
            
            for (var counter = 2; counter <= 10; counter = counter + 2) {
                
                console.log (counter);
                
            }
                      
        }
        
        var checkNumber = function () {
            
            var number = 0;
            
            while (number <= 100) {
                
            if (number != undefined) {
                number = prompt('Введите число больше 100');
            }
                
            else {
                
                break;
            }
                
            }
                             
        }
        
        var getPrimes = function () {
            
            var min = 2, max = 10;
                        
            for (var counter = min; counter < max; counter++) {
                
                var tick = 0;
                
                for (var subcounter = 2; subcounter < counter; subcounter++) {
                    
                    var balance = counter % subcounter;
                                        
                    if (balance == 0) {
                        tick++;
                    }
                    
                }
                
                if (tick == 0) {
                    console.log (counter);
                }
                
            }
                  
        }