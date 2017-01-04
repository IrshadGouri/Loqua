angular.module('Home.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPlatform, $rootScope) {
	$ionicPlatform.ready(function() {
		$rootScope.activefeild = 'home';
	});
})