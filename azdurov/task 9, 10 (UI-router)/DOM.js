// var tree = document.getElementsByTagName('ul')[0];
// tree.onclick = function(event) {
//     var target = event.target;
//     var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
//     childrenContainer.hidden = !childrenContainer.hidden;
// }
angular.module("myApp", []).
controller("TreeController", ['$scope', function($scope) {
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [{name: "Node", nodes: []}];
    $scope.delete = function(data) {
        data.nodes = [];
    };
}]);