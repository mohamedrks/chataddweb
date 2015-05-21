'use strict';

/**
 * @ngdoc function
 * @name chataddWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chataddWebApp
 */
angular.module('chataddWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
