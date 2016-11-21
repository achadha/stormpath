angular.module("savedNotes")
    .directive('savedNote', [function() {
        restrict: 'AE',
        templateUrl: 'directives/savedNotes/savedNote/savedNote.html',
        scope: {
            note: '='
        }
    }]);
