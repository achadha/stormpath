angular.module('note', [])
    .controller('noteCtrl', [
        '$scope',
        'noteService',
        function($scope, noteService) {
            $scope.$watch('$parent.currentNote', function(newValue, oldValue) {
                if(newValue) {
                    $scope.note = {
                        id: newValue.id,
                        title: newValue.title,
                        value: newValue.value
                    };
                }

            })

            $scope.submit = function() {
                noteService.post($scope.note);
            }
        }
    ])
    .directive('note', [function() {
        return {
            scope: true,
            restrict: 'AE',
            templateUrl: 'directives/note/note.html',
            controller: 'noteCtrl'
        }
    }]);
