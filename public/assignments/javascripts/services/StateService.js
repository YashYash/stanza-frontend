app.service('StateService', [
  '$firebase',
  function(
    $firebase) {
    'use strict';
    console.log('#### State Service loaded');

    var assignmentsUrl = 'https://stanza-front-end.firebaseio.com/assignments';
    var assignmentsRef = new Firebase(assignmentsUrl);
    var postsUrl = 'https://stanza-front-end.firebaseio.com/posts';
    var postsRef = new Firebase(postsUrl);
    var posts = $firebase(postsRef);

    var statesData = {
    	'NavController': {
    		"slideContent": false
    	},
        'AssignmentsController': {
            "assignments": $firebase(assignmentsRef).$asArray()
        },
        'WallController': {
            "posts": $firebase(postsRef).$asArray()
        }
    };

    return {
    	data: statesData
    }
  }
])
