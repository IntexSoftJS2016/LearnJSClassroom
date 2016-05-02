/**
 * Created by Жека on 27.04.2016.
 */
(function () {


    angular
        .module('app', [])

        .controller('MenuController', ['$scope', function ($scope) {
            this.items = [
                {name: 'white', type:'simple'},
                {name: 'yellow', type:'simple'},
                {name: 'black', type:'simple'}
            ];
        }
        ])
        .controller('ContentController', ['$scope', function ($scope) {
            this.table = [
                {column1: 'FirstName', column2: 'LastName', column3: 'Age'},
                {column1: 'BOB', column2: 'qwerty', column3: '22'},
                {column1: 'Vape', column2: 'незщй', column3: '33'},
                {column1: 'BOB', column2: 'qwerty', column3: '22'},
                {column1: 'Vape', column2: 'незщй', column3: '33'},
                {column1: 'BOB', column2: 'qwerty', column3: '22'},
                {column1: 'Vape', column2: 'незщй', column3: '33'},
                {column1: 'BOB', column2: 'qwerty', column3: '22'},
                {column1: 'Vape', column2: 'незщй', column3: '33'}];
        }
        ])
        .controller('HeaderController', ['$scope', function ($scope) {
            this.hello = "Добро пожаловать!";
        }
        ])
        .directive('colorized', function () {
            return function (scope, element, attrs) {

                scope.$watch(attrs.colorized, function (value) {
                    element.css({color: attrs.color});
                });
                return colorized;
            }
        })
        .directive('list', function(){
            return {
                restrict: 'E', //E = element, A = attribute, C = class, M = comment
                replace: false,
                transclude: false,
                scope: {
                    //@ reads the attribute value, = provides two-way binding, & works with functions
                    type: '@',
                    items: '='
                },
                template: '',
                templateUrl: '',
                controller: '', //Embed a custom controller in the directive
                link: function ($scope, element, attrs) {
                    scope.$watch(attrs.list, function (value) {
                        if (attrs['type'] == "simple") {
                            for(var count =0;count<4;count++)
                            {
                                var div = document.createElement("div");
                                var li = document.createElement("li");
                                li.innerHTML = element.node;
                                div.appendChild(li);
                            }


                        }
                    });
                    return div;
                    //DOM manipulation
                }
            };
        })

})();

