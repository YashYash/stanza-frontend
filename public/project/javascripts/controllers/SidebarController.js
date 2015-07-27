app.controller('SidebarController', [
	'$scope',
	'$rootScope',
	'$state',
	function(
		$rootScope,
		$scope,
		$state) {
	'use strict';
	console.log('#### Sidebar Controller');

    $scope.toggleSidebar = function() {
        $scope.showSidebar = !$scope.showSidebar;
        console.log($scope.showSidebar);
    };

}]);
