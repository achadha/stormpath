angular.module('changePassword', [])
    .directive('changePassword', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/changePassword/changePassword.html'
        }
    }]);
