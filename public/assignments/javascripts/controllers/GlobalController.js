app.controller('GlobalController', [
	'$scope', 
	'$state',
	'$rootScope',
	function($scope, $state, $rootScope) {
	'use strict';
	console.log('#### Global Controller');
	$state.go('app.v1.landing');
}]);