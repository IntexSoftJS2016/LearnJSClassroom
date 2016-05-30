var routerApp = angular.module('routerCtrl', ['ui.router']);
routerApp.config(RouterConfig);
function RouterConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'page-home.html'
        })
        .state('taskAngular1', {
            url: '/taskAngular1',
            templateUrl: 'page-taskAngular1.html'
        })
        .state('DOM', {
            url: '/DOM',
            templateUrl: 'page-DOM.html'
        });
}

routerApp.controller('ContentController', ContentController);
function ContentController($scope) {
    $scope.username = 'Андрей';
    $scope.changeUsername = function (username) {
        $scope.username = username;
    };
    $scope.colorList = {
        style: null
    };
    $scope.itemsAndNumbers = [
        {
            letter: 'А',
            number: '1'
        },
        {
            letter: 'Б',
            number: '2'
        },
        {
            letter: 'В',
            number: '3'
        },
        {
            letter: 'Г',
            number: '4'
        },
        {
            letter: 'Д',
            number: '5'
        }
    ];
}