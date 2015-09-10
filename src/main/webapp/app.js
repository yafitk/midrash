'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.common',
  'myApp.login',
  'myApp.home',
  'myApp.books',
 
  'myApp.about',
  'myApp.maharil',
  'myApp.version'
  
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/about'});
}]);
