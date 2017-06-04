"use strict";
angular.module('myApp.controllers', [])
  .controller('MembersContrllers', ['$scope','mockData', function($scope, mockData) {
        $scope.members = mockData;
        // console.log($scope.members[0]);
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