angular.module('forgotPassword', [])
    .directive('forgotPassword', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/forgotPassword/forgotPassword.html'
        }
    }]);
