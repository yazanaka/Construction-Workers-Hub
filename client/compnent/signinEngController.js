app.controller('signinEng', [
	'$scope',
	'$http',
	'$location',
	function($scope, $http, $location) {
		$scope.username = 'yazan';
		$scope.password = '';
		$scope.fullName = '';
		$scope.phonenumber = '';
		$scope.siteLocation = '4554';
		$scope.url = '' || 'https://avatarfiles.alphacoders.com/129/129186.jpg';
		var x = $scope;
		$scope.engineerSignIn = function() {
			var { username, password } = $scope;
			var engineer = { username, password };
			console.log($scope.username, '  ', $scope.password);
			$http.post('/signinEngineer', JSON.stringify(engineer)).then(
				(data) => {
					console.log(data, 'data');
					if (data.status == 200) {
						console.log($scope.url, $scope.username, $scope.phonenumber, $scope.siteLocation < 'start');
						const token = data.data.token;
						x.fullName = 'data.data.data.fullName';
						$scope.username = data.data.data.userName;
						$scope.phonenumber = data.data.data.phoneNumber;
						$scope.siteLocation = data.data.data.siteLocation;
						$scope.url = data.data.data.url;
						// console.log(token, 'token');
						console.log($scope.url, $scope.username, $scope.phonenumber, $scope.siteLocation);
						localStorage.setItem('token', token);
						// $scope.username = '';
						// $scope.password = '';
						// $scope.toggleSignIn = false;
						// $scope.toggleEngpage = true;
						$location.path('/engPage');
						console.log($scope.url, $scope.username, $scope.phonenumber, $scope.siteLocation, 'end');
					} else {
						console.log('errrrrror');
					}
				},
				(err) => console.log(err)
			);
		};
	}
]);
