app.factory('StateService', function() {

  'use strict';

  console.log('#### StateService');

  var stateData = {
    'sidebar': {
      isToggled: false,
      isFullyOpen: false
    }
  };
  return {
    data: stateData
  }
});
