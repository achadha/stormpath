angular.module('notesModule', [
    'note',
    'savedNotes',
    'noteService'
])
.controller('notesModuleCtrl', [
    '$scope',
    'noteService',
    function($scope, noteService) {
        function init() {
            noteService.get().then(function(res) {
                $scope.notes = res.data;
                $scope.currentNote = $scope.notes[0];
            });
        }

        $scope.submitNote = function(note) {
            noteService.post(note);
            init();
        }

        $scope.deleteNote = function(note) {
            noteService.delete(note);
            init();
        }

        $scope.newNote = function() {
            $scope.notes.unshift({
                title: "New Note"
            });
            $scope.currentNote = $scope.notes[0];
        }

        init();
    }
])
.directive('notesModule', [function() {
    return {
        scope: true,
        restrict: 'AE',
        templateUrl: 'directives/notesModule/notesModule.html',
        controller: 'notesModuleCtrl'
    }
}]);
