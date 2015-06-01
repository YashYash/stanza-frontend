var app = angular.module('app', ['ionic', 'ngStorage', 'ngSanitize', 'ngLoad', 'firebase']);
'use strict';

console.log('#### APP JS LOADED: app');
app.run(['$rootScope', function($rootScope) {
  console.log('#### App.js .run');
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  console.log('#### State provider working');
  $urlRouterProvider.otherwise('/');
  $stateProvider

    .state('app', {
      url: '/',
      views: {
        'global': {
          templateUrl: '/assignments/views/global.html',
          controller: 'GlobalController'
        }
      }
    })
    .state('app.v1', {
      url: 'tab',
      abstract: true,
      views: {
        'global@': {
          templateUrl: '/assignments/views/v1/v1.html',
          controller: 'RootController'
        },
        'nav@app.v1': {
          templateUrl: '/assignments/views/v1/nav.html',
          controller: 'NavController'
        },
        'content@app.v1': {
          templateUrl: '/assignments/views/v1/content.html',
          controller: 'ContentController'
        }
      }
    })
    .state('app.v1.landing', {
      url: '/landing',
      views: {
        'content@app.v1': {
          templateUrl: '/assignments/views/v1/landing.html',
          controller: 'LandingController'
        }
      }
    })
    .state('app.v1.get-started', {
      url: '/get-started',
      views: {
        'content@app.v1': {
          templateUrl: '/assignments/views/v1/get-started.html',
          controller: 'GetStartedController'
        }
      }
    })    
    .state('app.v1.assignments', {
      url: '/assignments',
      views: {
        'content@app.v1': {
          templateUrl: '/assignments/views/v1/assignments.html',
          controller: 'AssignmentsController'
        }
      }
    })
}]);

app.constant('moment', moment);
app.filter('moment', function() {
  return function(dateString, format, calendar) {
    if (format === 'calendar') {
      return moment(dateString).calendar();
    } else {
      return moment(dateString).format(format);
    }
  };
});
