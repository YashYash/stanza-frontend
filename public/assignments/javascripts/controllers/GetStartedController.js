app.controller('GetStartedController', [
  '$scope',
  '$state',
  'StateService',
  function(
    $scope,
    $state,
    StateService) {
    'use strict';
    console.log('#### Get Started Controller');

    // Init

    // UI-responders
    $scope.getData = function(state) {
      return StateService.data[state];
    };
    $scope.assignments = function() {
      $state.go('app.v1.assignments');
    };
    
  }
]);
