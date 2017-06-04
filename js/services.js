var app = angular.module("myApp.Services", []);
app.factory('myService', function( $http) {
	 var savedData = {}, promise;
	 function set(data) {
	   savedData = data;
	 }
	 function getMembersService(clientName) {
	        // $http returns a promise, which has a then function, which also returns a promise 
          promise = $http({
              method: 'GET',
              url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members'
          });
	      // Return the promise to the controller
	      return promise;
	 }

	 function getData() {
	    return savedData;
	 }

	 return {
	  set: set,
	  getData: getData,
	  getMembersService: getMembersService
	 }

});