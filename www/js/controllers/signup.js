angular.module('SignUp.controllers', [])

.controller('SignUpCtrl', function($scope, $ionicPlatform, $rootScope, $ionicActionSheet, $timeout) {
	$ionicPlatform.ready(function() {
		$rootScope.activefeild = 'signout';

		// Triggered on a button click, or some other target
		 $scope.show = function() {

		   // Show the action sheet
		   var hideSheet = $ionicActionSheet.show({
		     buttons: [
		       { text: '<b class="text-gray">View Profile Picture</b>' },
		       { text: '<b class="text-gray">Choose New Picture</b>' },
		       { text: '<b class="text-gray">Take New Picture</b>' }
		     ],
		     destructiveText: '<b>Cancel</b>',
		     cancelText: 'Cancel',
		     cancel: function() {
		     	hideSheet();
	          // add cancel code..
	         },
		     buttonClicked: function(index) {
		       return true;
		     }
		   });

		   // For example's sake, hide the sheet after two seconds
		   // $timeout(function() {
		   //   hideSheet();
		   // }, 2000);

		 };

	});
})