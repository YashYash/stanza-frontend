app.service('WallService', [
  '$firebase',
  '$rootScope',
  'moment',
  function(
    $firebase,
    $rootScope,
    moment) {
    'use strict';
    console.log('#### Wall Service loaded');

    var postsUrl = 'https://stanza-front-end.firebaseio.com/posts';
    var postsRef = new Firebase(postsUrl);
    var posts = $firebase(postsRef);

    return {
    	createPost: function(post) {
            console.log('#### Creating the post');
            var newPost = post;
            newPost.created = moment().format('MM-DD-YYYY hh:mm A');
            posts.$push(newPost).then(function(response) {
                $rootScope.$broadcast('post created');
            });

        }
    }
  }
])
