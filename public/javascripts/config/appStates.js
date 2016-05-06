angular.module('portfolio')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url: '/home',
  templateUrl: '/homePagePartial.html',
  controller: 'homeController'

  });

$locationProvider.html5Mode(true);

}]);