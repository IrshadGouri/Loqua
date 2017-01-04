// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Laqua', ['ionic', 'Nav.controllers', 'Home.controllers', 'Login.controllers', 'SignUp.controllers', 'Profile.controllers', 'ResetPassword.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
   $ionicConfigProvider.navBar.alignTitle('center');
   // $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
   $ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
   $ionicConfigProvider.tabs.position("top"); //Places them at the bottom for all OS
   $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('nav', {
    url: '/nav',
    abstract: true,
    templateUrl: 'templates/nav.html',
    controller: 'NavCtrl'
  })

  // Each tab has its own nav history stack:

  .state('nav.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  })

  .state('resetpassword', {
    url: '/resetpassword',
    templateUrl: 'templates/resetpassword.html',
    controller: 'ResetPasswordCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/nav/home');

});
