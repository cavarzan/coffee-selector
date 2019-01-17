'use strict';

/**
 * @ngdoc function
 * @name coffeeSelectorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coffeeSelectorApp
 */
angular.module('coffeeSelectorApp')
    .controller('MainCtrl', function ($scope, $interval, $timeout) {

        $scope.init = function () {
            $scope.showButton = false;
            $scope.initialized = false;
            $scope.spinner = false;
            $scope.result = false;
            $timeout(function () {
                var storage = angular.fromJson(localStorage.getItem('pessoas')) || [];
                $scope.pessoas = [];
                if (storage.length > 0) {
                    var i = 0;
                    $interval(function () {
                        $scope.pessoas.push(storage[i]);
                        i++;
                        if (i === storage.length) {
                            $scope.showButton = true;
                        }
                    }, 100, storage.length);
                }
            }, 100);
            $scope.pessoa = {};
            $timeout(function () {
                $scope.initialized = true;
            }, 250);
        };

        $scope.init();
        $scope.addNome = function () {
            $scope.showButton = true;
            $scope.pessoa.uid = new Date().getTime();
            $scope.pessoas.push($scope.pessoa);
            $scope.pessoa = {};
        };
        $scope.remove = function ($index) {
            $scope.pessoas.splice($index, 1);
            if ($scope.pessoas.length === 0) {
                $scope.showButton = false;
            }
        };

        $scope.calcular = function () {
            localStorage.setItem('pessoas', angular.toJson($scope.pessoas));
            $scope.items = angular.copy($scope.pessoas);
            $scope.showButton = false;
            var i = 0;
            $interval(function () {
                $scope.pessoas.pop();
                i++;
                if (i === $scope.items.length) {
                    $timeout(function () {
                        $scope.process();
                    }, 500);

                }
            }, 100, $scope.items.length);
        };

        $scope.shuffle = function (o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };

        $scope.process = function () {
            $scope.items = $scope.shuffle($scope.items);
            $scope.items = $scope.shuffle($scope.items);
            $scope.items = $scope.shuffle($scope.items);
            $scope.items = $scope.shuffle($scope.items);
            $scope.items = $scope.shuffle($scope.items);
            $scope.spinner = true;
            var index = 0;
            var time = 100;
            var iterations = 25 + Math.ceil((15 * Math.random()));
            for (var i = 0; i< iterations; i++) {
                time = (time) * 1.1;
                $timeout(function () {
                    index++;
                    if (index === iterations) {
                        $scope.spinner = false;
                        $scope.result = true;
                        $scope.sortudo = $scope.transient;
                    } else {
                        $scope.transient = $scope.items[Math.floor(Math.random() * $scope.items.length)].nome;
                    }
                }, time);
            }
        };

        $scope.repeat = function () {
            $scope.init();
        };

    });

