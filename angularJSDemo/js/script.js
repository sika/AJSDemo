/// <reference path="angular.min.js" /> 

var myApp = angular.module("MyModule", []);

myApp.controller("simpleController", function($scope) {

    var customers = [{
        name: "simmelimme",
        city: "st louis"
    }, {
        name: "pelleman",
        city: "paris"
    }, {
        name: "ompalompa",
        city: "shadow valley"
    }, {
        name: "micke the dike",
        city: "Kesh Kesh"
    }];

    $scope.customers = customers;
});
