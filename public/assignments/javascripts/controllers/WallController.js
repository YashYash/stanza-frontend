app.controller('WallController', [
	'$scope', 
	'$state',
	'$rootScope',
	'$timeout',
	'StateService',
	'WallService',
	function(
		$scope,
		$state,
		$rootScope,
		$timeout,
		StateService,
		WallService) {

	'use strict';
	console.log('#### Wall Controller');

	// Init
	$scope.post = {};
	$scope.buttonText = 'Create';
	// UI-responders
	$scope.getData = function(state) {
		return StateService.data[state];
	};

	$scope.toggleForm = function() {
		if($scope.showForm) {
			$scope.showForm = false;
		} else {
			$scope.showForm = true;
		}
	};

	$scope.createPost = function() {
		WallService.createPost($scope.post);
		$scope.buttonText = 'Creating Post ...';
	};

	$rootScope.$on('post created', function(e) {
		e.preventDefault();
		$scope.post = {};
		$scope.buttonText = 'Created';
		$timeout(function() {
			$scope.buttonText = 'Create';
			$scope.showForm = false;
			$scope.$apply();
		}, 1000);
	});
}]);