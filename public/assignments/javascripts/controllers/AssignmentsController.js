app.controller('AssignmentsController', [
	'$scope', 
	'$state',
	'$rootScope',
	'$timeout',
	'StateService',
	function(
		$scope,
		$state,
		$rootScope,
		$timeout,
		StateService) {

	'use strict';
	console.log('#### Assignments Controller');

	// Init
	$rootScope.tabTitle = 'Stanza Assignments';
	
	// UI-responders
	$scope.getData = function(state) {
		return StateService.data[state];
	};

	$scope.getStarted = function() {
		$state.go('app.v1.get-started');
	};
}]);