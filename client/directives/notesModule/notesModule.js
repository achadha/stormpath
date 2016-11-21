angular.module('notesModule', [
    'note',
    'savedNotes',
    'noteService',
    'stormpath.userService'
])
.controller('notesModuleCtrl', [
    '$scope',
    '$user',
    'noteService',
    function($scope, $user, noteService) {
        $user.get().then(function(user) {
            console.log(user);
        });

        function init() {
            noteService.get().then(function(res) {
                $scope.notes = res.data;
                if($scope.notes.length > 0) {
                    $scope.currentNote = $scope.notes[0];
                    $scope.currentNote.active = true;
                }
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
            if($scope.notes.length > 0) {
                $scope.currentNote.active = false;
            }

            $scope.notes.unshift({
                title: "New Note",
                email: $user.currentUser.email
            });

            $scope.currentNote = $scope.notes[0];
            $scope.currentNote.active = true;
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
