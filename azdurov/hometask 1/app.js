/**
 * Created by Андрей on 027 27.04.16.
 */
(function() {
    'use strict';
    angular
        .module('app', [])
        .controller('ContentController', ['$scope', function($scope) {
            $scope.username = 'Андрей';
            $scope.changeUsername = function(username) {
                $scope.username = username;
            };
            $scope.lettersAndNumbers = [
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
                }
            ];
            
        }]);
})();