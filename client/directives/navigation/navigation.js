angular.module("navigation", [])
    .directive("navigation", [function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/navigation/navigation.html'
        }
    }]);
