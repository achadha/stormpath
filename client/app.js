var app = angular.module("app", [
    'ui.router',
    'navigation',
    'notesModule'
    // 'stormpath',
    // 'stormpath.templates'
])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        template: '<div notes-module></div>'
    })
    .state('register', {
        url: '/register',
        template: '<div>meow</div>'
    })
});
