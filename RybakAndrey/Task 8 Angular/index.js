var module = angular.module("task",[]);
module.directive("headerComponent", function () {
    return {
        restrict: 'E',
        scope: {},
        replace: true,
        controllerAs: "headerScope",
        controller: function() {
            this.headerItems = [{
                name: 'История',
                href: "#history"
            }, {
                name: 'Логотип',
                href: "#logo"
            }, {
                name: 'Новые теги',
                href: "#tags"
            }];
        },
        templateUrl: 'header-view.html'
    }
});

module.directive("sideComponent", function () {
    return {
        restrict: 'E',
        scope: {},
        replace: true,
        controllerAs: "sideScope",
        controller: function() {
            this.sideItems = [{
                name:"CSS",
                href:"https://ru.wikipedia.org/wiki/CSS"
            }, {
                name:"JavaScript",
                href:"https://ru.wikipedia.org/wiki/JavaScript"
            }, {
                name:"AngularJS",
                href:"https://ru.wikipedia.org/wiki/AngularJS"
            }, {
                name:"jQuery",
                href:"https://ru.wikipedia.org/wiki/JQuery"
            }];
        },
        templateUrl: 'side-view.html'
    }
});

module.directive("contentComponent", function () {
    return {
        restrict: 'E',
        scope: {},
        replace: true,
        controller: function() {

        },
        templateUrl: 'content-view.html'
    }
});

module.directive("footerComponent", function () {
    return {
        restrict: 'E',
        scope: {},
        replace: true,
        controller: function() {

        },
        templateUrl: 'footer-view.html'
    }
});