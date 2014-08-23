'use strict';

/**
 * @ngdoc function
 * @name coffeeSelectorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coffeeSelectorApp
 */
angular.module('coffeeSelectorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
