(function() {
    'use strict';
    angular
        .module('app', [])
        .controller('ContentController', ['$scope', function($scope) {
            $scope.username = 'Андрей';
            $scope.changeUsername = function(username) {
                $scope.username = username;
            };
            $scope.colorList = {
                style: null,
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
        }]);
})();
