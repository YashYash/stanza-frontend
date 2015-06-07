app.factory('StateService', function() {

  'use strict';

  console.log('#### StateService');

  var stateData = {
    'sidebar': {
      isToggled: false
    }
  };
  return {
    data: stateData
  }
});
