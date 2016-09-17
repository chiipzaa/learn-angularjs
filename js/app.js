'use strict';

angular.module('ngApp', [
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "pages/home.html",
            controller: 'homeCtrl'
        });
})

.controller('homeCtrl', ['$scope', function($scope) {

    $scope.fname = 'Suputtana';
    $scope.lname = 'Pingmaung';

}]);
