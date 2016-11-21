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
                    $scope.$parent.currentNote = note;
                }
            }
        }
    }]);
