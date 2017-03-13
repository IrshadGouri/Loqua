angular.module('Complaint.controllers', [])

.controller('ComplaintCtrl', function($scope, $ionicPlatform, $rootScope, $ionicPopover, TwitterLib, APIService, $state, $localstorage, $ionicPopup) {
	$ionicPlatform.ready(function() {
	$rootScope.activefeild = 'complain';
	$scope.userId = $localstorage.get('userId');
	console.log($scope.userId);
	$scope.complainform = {};
	$scope.complimentForm = {
		"user_id" : $scope.userId
	};
	var myPopup;
	$scope.complaintForm = {
		"user_id" : $scope.userId
	};
	$scope.filter = {};
	$scope.filter.check = false;
	

	$scope.oauth_token = localStorage.getItem("oauth_token");
    $scope.oauth_token_secret = localStorage.getItem("oauth_token_secret");
    console.log($scope.oauth_token_secret);
    $scope.checkdata = function(){
    	if(!$scope.oauth_token_secret && !$scope.oauth_token){

    		$scope.uploadImage();
    	}else{
    		$scope.filter.check = true;
    	}
    }
	 $scope.ratingsObject = {
	    iconOn: 'ion-happy', //Optional
	    iconOff: 'ion-happy', //Optional
	    iconOnColor: 'rgb(95, 156, 29)', //Optional
	    iconOffColor: 'rgb(102, 102, 102)', //Optional
	    rating: 0, //Optional
	    minRating: 0, //Optional
	    readOnly: false, //Optional
	    callback: function(rating, index) { //Mandatory    
	      $scope.ratingsCallback(rating, index);
	    }
	  };
	  $scope.ratingsObject1 = {
	    iconOn: 'ion-sad', //Optional
	    iconOff: 'ion-sad', //Optional
	    iconOnColor: 'rgb(213, 15, 16)', //Optional
	    iconOffColor: 'rgb(102, 102, 102)', //Optional
	    rating: 0, //Optional
	    minRating: 0, //Optional
	    readOnly: false, //Optional
	    callback: function(rating, index) { //Mandatory    
	      $scope.ratings(rating, index);
	    }
	  };
	  // .fromTemplateUrl() method
	  $ionicPopover.fromTemplateUrl('templates/popover/tweet.html', {
	    scope: $scope
	  }).then(function(popover) {
	    $scope.popover = popover;
	  });

	  $scope.choices = [{id: 'choice1'}];
	  $scope.addNewChoice = function() {
	    var newItemNo = $scope.choices.length+1;
	    $scope.choices.push({'id':'choice'+newItemNo});
	  };
	    
	  $scope.removeChoice = function() {
	    var lastItem = $scope.choices.length-1;
	    $scope.choices.splice(lastItem);
	  };

	  $scope.openPopover = function($event) {
	    $scope.popover.show($event);
	  };
	  $scope.closePopover = function() {
	    $scope.popover.hide();
	  };


	  $scope.ratingsCallback = function(rating, index) {
	    console.log('Selected rating is : ', rating, ' and index is ', index);
	    $scope.complimentForm.rating= rating;

	  };
	  $scope.ratings = function(rating, index) {
	    console.log('Selected rating is : ', rating, ' and index is ', index);
	    $scope.complaintForm.rating= rating;
	  };

	  $scope.uploadImage = function() {
	        myPopup = $ionicPopup.show({
	            template: '<div class="padding"><input type="submit" ng-click="Twitterlogin()" class="button button-block button-dark-option text-white fs-14" value="Twitter Login" ></div>',
	            title: '<h4>Choose Options</h4>',
	            scope: $scope,
	            buttons: [{
	                text: 'Cancel',
	                type: 'button-stable text-color'
	            }, ]
	        });
	        myPopup.then(function(res) {
	        	$scope.filter.check = false;
	        	console.log(res);
	        });
	    };

	    $scope.Twitterlogin = function() {
		    try{
		      myPopup.close();
		      $scope.filter.check = true;
		      console.log("hiihh");
		      TwitterLib.init().then(function (data) {
		        try{
		          $scope.twittername = data.screen_name;
		          localStorage.setItem("twittername",$scope.twittername);		          
		        }catch(err){
		          alert(err.message);
		        }
		        
		      }, function error(error) {
		        alert(JSON.stringify(error));
		      });
		    }catch(err){
		      alert(err.message);
		    }
		}

	    $scope.complimentUser = function(){
			console.log($scope.complimentForm);
			$scope.oauth_token = localStorage.getItem("oauth_token");
   			$scope.oauth_token_secret = localStorage.getItem("oauth_token_secret");
   			$scope.twittername = localStorage.getItem("twittername");
   			$scope.complimentForm.access_token = $scope.oauth_token;
   			$scope.complimentForm.access_token_secret = $scope.oauth_token_secret;
   			$scope.complimentForm.user_name = $scope.twittername;
   			// $scope.complimentForm.user_id = $scope.twittername;
   			// $scope.complimentForm.company_name = "CHS";
			$scope.compliment = {
				compliment: $scope.complimentForm
			}
			console.log($scope.compliment);
			APIService.setData({
	            req_url: main_url+'compliments',
	            data: $scope.compliment
	        }).then(function(resp) {
	        	console.log(resp);
	        	if(resp.data.compliment){
				   $state.go('nav.home');
	            }else{
	            	
	            }
	           },function(err) {

	        }); 
		}

		 $scope.complaintUser = function(){
			console.log($scope.complaintForm);
			$scope.oauth_token = localStorage.getItem("oauth_token");
   			$scope.oauth_token_secret = localStorage.getItem("oauth_token_secret");
   			$scope.twittername = localStorage.getItem("twittername");
   			$scope.complaintForm.access_token = $scope.oauth_token;
   			$scope.complaintForm.access_token_secret = $scope.oauth_token_secret;
   			$scope.complaintForm.user_name = $scope.twittername;
   			// $scope.complaintForm.company_name = "CHS";
			$scope.complaint = {
				complaint: $scope.complaintForm
			}
			console.log($scope.complaint);
			APIService.setData({
	            req_url: main_url+'complaints',
	            data: $scope.complaint
	        }).then(function(resp) {
	        	console.log(resp);
	        	if(resp.data.compalint){
				   $state.go('nav.home');
	            }else{
	            	
	            }
	           },function(err) {

	        }); 
		}


	});
})