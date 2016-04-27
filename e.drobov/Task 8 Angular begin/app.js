/**
 * Created by Жека on 27.04.2016.
 */
(function(){

    function MenuController($scope){
    $scope.items = [
    {name: 'Секция 1'},
    {name: 'Секция 2'},
    {name: 'Секция 3'},
    {name: 'Секция 4'},
    {name: 'Секция 5'}];
    }

    var app = angular
        .module('app',[])
        .controller('MenuController',MenuController)


});

/*
function MainCtrl ($scope) {
    $scope.items = [{
        name: 'Набор ныряльщика',
        id: 7297510
    },{
        name: 'Шноркель',
        id: 0278916
    },{
        name: 'Гидрокостюм',
        id: 2389017
    },{
        name: 'Полотенце',
        id: 1000983
    }];
}

angular
    .module('app')
    .controller('MainCtrl', MainCtrl);
    */