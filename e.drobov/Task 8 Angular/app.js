/**
 * Created by Жека on 27.04.2016.
 */
(function(){


   angular
       .module('app',[])

        .controller('MenuController',['$scope',function($scope){
            this.items = [
                {name: 'Секция 1'},
                {name: 'Секция 2'},
                {name: 'Секция 3'},
                {name: 'Секция 4'},
                {name: 'Секция 5'}];
        }
        ])
        .controller('ContentController',['$scope',function($scope){
             this.table = [
                 {column1: 'FirstName', column2: 'LastName', column3: 'Age' },
                 {column1: 'BOB', column2: 'qwerty', column3: '22' },
                 {column1: 'Vape', column2: 'незщй', column3: '33' },
                  {column1: 'BOB', column2: 'qwerty', column3: '22' },
                {column1: 'Vape', column2: 'незщй', column3: '33' },
                {column1: 'BOB', column2: 'qwerty', column3: '22' },
                {column1: 'Vape', column2: 'незщй', column3: '33' },
                {column1: 'BOB', column2: 'qwerty', column3: '22' },
                {column1: 'Vape', column2: 'незщй', column3: '33' }];
        }
        ])
       .controller('HeaderController',['$scope',function($scope){
           this.hello = "Добро пожаловать!";
       }
       ])

})();

