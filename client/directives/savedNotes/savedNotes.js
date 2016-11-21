angular.module('savedNotes', [])
    .directive('savedNotes', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/savedNotes/savedNotes.html',
            controller: function($scope, $element, $attrs) {

            }
        }
    }]);
