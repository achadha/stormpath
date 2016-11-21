angular.module('notesModule', [
    'note',
    'savedNotes'
])
.directive('notesModule', [function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/notesModule/notesModule.html'
    }
}]);
