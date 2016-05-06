angular.module('portfolio', ['ui.router','ngTable', 'ngMap'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url: '/home',
  templateUrl: '/homePagePartial.html',
  controller: 'homeController'
})

.state('location', {
  url: '/location',
  templateUrl: '/locationPartial.html',
  controller: 'locationController'

});

$locationProvider.html5Mode(true);

}]);