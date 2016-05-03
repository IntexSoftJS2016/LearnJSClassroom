/**
 * Created by Natalie on 4/28/2016.
 */
(function() {
   var app = angular.module('app', ['ui.router'])
     .config(function($stateProvider, $urlRouterProvider) {
             $urlRouterProvider.otherwise('/');
             $stateProvider
               .state('index', {
                 url:'',
                 views: {
                   'nav': {templateUrl: 'views/nav.html'},
                   'sidebar': {templateUrl: 'views/sidebar.html'},
                   'content': {templateUrl: 'views/content.html'}
                 }
               })
  })
    .controller('menuController',  menuController)
    .controller('headerController', headerController)
    .controller('listController', listController)
    .controller('contentController', contentController)

    .directive('colorized', colorized)
    .directive('list', list);

    function contentController() {
      var self = this;
      self.cell1 = 'Система рифтов поднимает вулканизм.';
      self.cell2 = 'Двухпалатный парламент поднимает распространенный памятник Средневековья.';
      self.cell3 = 'Замкнутая нация превышает уличный тюлень.';
      self.cell4 = 'Многолетняя мерзлота, в первом приближении, поднимает бамбуковый медведь панда.';
      }

    function listController () {
      var self = this;
      self.listItems = [
        {name: 'Один'},
        {name: 'Два'},
        {name: 'Три'},
        {name: 'Четыре'},
        {name: 'Пять'}
      ];
      self.types = [
        {
          id: 1,
          name: 'Simple'
        },
        {
          id: 2,
          name: 'OddEven'
        }
      ];
      self.selectedType = 1;
    }

    function headerController () {
      var self = this;
      self.logo = 'ЛОГОТИП';
    }

    function menuController ($scope) {
      $scope.items = [
        {name: 'Главная'},
        {name: 'О компании'},
        {name: 'Информация'},
        {name: 'Карта сайта'},
        {name: 'Контакты'}];
    }

    function colorized() {
      return {
        scope: {
          color: '@'
        },
        link: function (scope, elem) {
          elem.css({"background-color":scope.color});
        }
      }
    }

    function list () {
      return {
        scope: {
          type: '@'
        },
        replace: true,
        template: function () {
          return '<li>{{items}}</li>'
        },
        link: function (scope, elem, attrs) {
          attrs.$observe('items', function(items) {
            scope.items = items;
          });
          scope.$watch('type', function(newValue) {
            if (newValue) {
              changeBackground();
            }
          }, true);

          function changeBackground() {
            var ul = document.getElementById('list-directive');
            if (scope.type === '2') {
              for (var inc = 1; inc < ul.children.length; inc=inc+2) {
                  ul.children[inc].style.backgroundColor = '#cfcfcf';
              }
            }
            else elem.css({"background-color": '#ffffff'});
          }
        }
      }
    }

})();

