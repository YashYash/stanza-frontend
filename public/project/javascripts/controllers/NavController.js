app.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  'StateService',
  function(
    $scope,
    $rootScope,
    $state,
    StateService) {

    'use strict';

    console.log('#### Nav Controller');

    $rootScope.$on('landingBody:toggleSidebar', toggleSidebar);

    $scope.navigate = function(route) {
      if (route === 'home') {
        $state.go('app.v1.landing');
      } else if (route === 'music') {
        $state.go('app.v1.music-desktop');
      } else if (route === 'booking') {
        $state.go('app.v1.booking-desktop');
      } else if (route === 'cars') {
        console.log('navigate to cars');
      } else {
        console.error('route not found');
      }
    };

    $scope.getState = function(container, key) {
      return StateService.data[container][key];
    };

    function toggleSidebar(event, obj) {
      StateService.data[obj.container][obj.key] = !(StateService.data[obj.container][obj.key])
      obj.key = 'isFullyOpen';
      onSidebarToggled(obj);
    }

    function onSidebarToggled(obj) {
      var isFullyOpen = (StateService.data[obj.container][obj.key])
      if (isFullyOpen) {
        StateService.data[obj.container][obj.key] = false;
      } else {
        $timeout(function() {
          StateService.data[obj.container][obj.key] = true;
        }, 500);
      }
    }
  }
]);
