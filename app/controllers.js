"use strict";
angular.module('myApp.controllers', [])
  .controller('MembersContrllers', ['$scope','mockData', function($scope, mockData) {
        $scope.members = mockData;
        // console.log($scope.members[0]);
        var firstRecord = $scope.members[0]; 
        $scope.fullName = firstRecord.firstName + " " + firstRecord.surname;
        $scope.imgSrc = firstRecord.portrait;
        $scope.motto = JSON.stringify(firstRecord.motto);
        $scope.gender = firstRecord.gender;
        $scope.birthday = firstRecord.birthday;
        $scope.state = firstRecord.state;
        $scope.getMemberDetails = function(member) {
          console.log(member)
          $scope.fullName = member.firstName + " " + member.surname;
          $scope.imgSrc = member.portrait;
          $scope.motto = JSON.stringify(member.motto);
          $scope.gender = member.gender;
          $scope.birthday = member.birthday;
          $scope.state = member.state;
        }
}]);