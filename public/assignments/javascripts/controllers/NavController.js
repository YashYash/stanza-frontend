app.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  '$timeout',
  'StateService',
  function(
    $rootScope,
    $scope,
    $state,
    $timeout,
    StateService) {
    'use strict';
    console.log('#### Nav Controller');

    // Init

    // Ui-responders

    $scope.getData = function(state) {
    	return StateService.data[state];
    };

    $scope.toggleNav = function() {
    	if(StateService.data['NavController'].slideContent) {
    		StateService.data['NavController'].slideContent = false;
    	} else {
    		StateService.data['NavController'].slideContent = true;
    	}
    }
  }
]);
