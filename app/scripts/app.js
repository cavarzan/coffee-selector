'use strict';

/**
 * @ngdoc overview
 * @name coffeeSelectorApp
 * @description
 * # coffeeSelectorApp
 *
 * Main module of the application.
 */
angular
  .module('coffeeSelectorApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
