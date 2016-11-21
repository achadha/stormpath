angular.module('noteService', [])
    .service('noteService', ['$http', function($http) {
        this.notes = [];

        this.get = function() {
            return $http.get('/api/notes');
        }

        this.post = function(note) {
            $http.post('/api/note', note);
        }

        this.delete = function(note) {
            $http.delete('/api/note/' + note.id);
        }
    }])
