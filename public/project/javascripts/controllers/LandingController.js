app.controller('LandingController', [
  '$scope',
  '$state',
  '$rootScope',
  '$http',
  'StateService',
  function(
    $scope,
    $state,
    $rootScope,
    $http,
    StateService) {

    'use strict';

    console.log('#### Landing Controller');

    $scope.getState = function(container, key) {
      return StateService.data[container][key];
    };
  }
]);
