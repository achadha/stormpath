angular.module('registration', [])
.directive('registration', [function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/registration/registration.html'
    }
}]);
