app.service('StateService', [
  '$firebase',
  function(
    $firebase) {
    'use strict';
    console.log('#### State Service loaded');

    var assignmentsUrl = 'https://stanza-front-end.firebaseio.com/assignments';
    var assignmentsRef = new Firebase(assignmentsUrl);
    console.log(assignmentsRef);
    var statesData = {
    	'NavController': {
    		"slideContent": false
    	},
        'AssignmentsController': {
            "assignments": $firebase(assignmentsRef).$asArray()
        }
    };

    return {
    	data: statesData
    }
  }
])
