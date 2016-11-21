var app = angular.module("app", [
    'ui.router',
    'registration',
    'login',
    'changePassword',
    'forgotPassword',
    'navigation',
    'notesModule',
    'stormpath',
    'stormpath.templates'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, STORMPATH_CONFIG) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider
    .state('home', {
        url: '/',
        template: '<div notes-module></div>',
        sp: {
            authenticate: true
        }
    })
    .state('register', {
        url: '/register',
        template: '<div registration></div>'
    })
    .state('login', {
        url: '/login',
        template: '<div login></div>'
    })
    .state('forgot', {
        url: '/forgot',
        template: '<div forgot-password></div>'
    })
    .state('change', {
        url: '/change',
        template: '<div change-password></div>'
    });

    STORMPATH_CONFIG.FORM_CONTENT_TYPE = 'application/json';
}).run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'home'
  });
});
