"use strict";
angular.module('myApp',[
'ngRoute',
'ui.bootstrap',
'myApp.controllers',
'myApp.Services'
]).config(function($routeProvider, $locationProvider){
    $routeProvider.when('/home',{
    templateUrl:'/partials/members.html',
    controller: "MembersContrllers",
    resolve: {
            "mockData": function (myService) {
                return myService.getMembersService().then(function(d) {
                    myService.set(d.data);
                    return myService.getData();
                });
            }
        }
    }).otherwise({redirectTo:'/home'});
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
angular.element(function() {
    angular.bootstrap(document, ['myApp']);
});