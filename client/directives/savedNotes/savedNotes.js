angular.module('savedNotes', [])
    .directive('savedNotes', [function() {
        return {
            scope: true,
            restrict: 'AE',
            templateUrl: 'directives/savedNotes/savedNotes.html',
            controller: function($scope, $element, $attrs) {
                $scope.$watch('$parent.notes', function(newValue, oldValue) {
                    if(newValue !== oldValue) {
                        $scope.notes = newValue;
                    }
                })

                $scope.select = function(note) {
                    $scope.$parent.currentNote.active = false;
                    $scope.$parent.currentNote = note;
                    $scope.$parent.currentNote.active = true;
                }
            }
        }
    }]);
