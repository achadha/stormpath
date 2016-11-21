angular.module('note', [])
    .directive('note', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/note/note.html'
        }
    }]);
