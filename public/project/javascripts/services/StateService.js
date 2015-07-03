app.service('StateService', [
  '$firebase',
  function($firebase) {
    'use strict';
    console.log('#### State Service loaded');

    var projectsUrl = 'https://stanza-front-end.firebaseio.com/projects';
    var projectsRef = new Firebase(projectsUrl);
    var postsUrl = 'https://stanza-front-end.firebaseio.com/posts';
    var postsRef = new Firebase(postsUrl);
    var posts = $firebase(postsRef);

    var statesData = {
    	'NavController': {
    		"slideContent": false
    	},
        'projectsController': {
            "projects": $firebase(projectsRef).$asArray()
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
