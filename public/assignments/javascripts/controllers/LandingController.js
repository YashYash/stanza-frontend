app.controller('LandingController', [
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
	console.log('#### Landing Controller');

	// Init

	// UI-responders
	$scope.getData = function(state) {
		return StateService.data[state];
	};
	$scope.begin = function() {
		$state.go('app.v1.assignments');
	};
}]);