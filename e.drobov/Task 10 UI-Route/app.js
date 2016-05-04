/**
 * Created by Жека on 04.05.2016.
 */
var routerApp = angular.module('routerApp',['ui.router']);
    routerApp.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'partial-home.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'partial-list.html'

            });
    });