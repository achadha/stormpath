angular.module('noteService', ['stormpath.userService'])
    .service('noteService', ['$http', '$user', function($http, $user) {
        this.notes = [];

        this.get = function() {
            return $http.get('/api/notes?emailName=' + $user.currentUser.email);
        };

        this.getLatest = function() {
            return $http.get('/api/notes/latest');
        }

        this.post = function(note) {
            note.email = $user.currentUser.email;
            $http.post('/api/note', note);
        };

        this.delete = function(note) {
            $http.delete('/api/note/' + note._id);
        };
    }])
