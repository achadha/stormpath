angular.module('login', [])
.directive('login', [function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/login/login.html'
    }
}]);
