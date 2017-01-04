angular.module('Login.controllers', [])

.controller('LoginCtrl', function($scope, $ionicPlatform, $rootScope) {
	$ionicPlatform.ready(function() {
		$rootScope.activefeild = 'signout';
	});
})