angular.module('GreenSaloon.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {

	$scope.user = {};

	$scope.signIn = function () {
    var username = $scope.user.username;
    Auth.signin({username:$scope.user.username,password:$scope.user.password})
      .then(function (data) {
        $window.localStorage.setItem('com.GS', username);
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
      $scope.user.username = '';
      $scope.user.password = '';
  };
	
});
