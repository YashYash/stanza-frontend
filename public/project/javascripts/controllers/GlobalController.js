app.controller('GlobalController', [
  '$scope',
  '$rootScope',
  '$state',
  function($scope, $rootScope, $state) {
    'use strict';
    console.log('#### Global Controller');
    $state.go('app.v1.landing');
  }
]);
