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
            })
            .state('page2', {
                url: "/page2/:param",
                templateUrl: "pages/page2.html",
                controller: 'homeCtrl'
            })
            .state('page3', {
                url: "/page3/:param",
                templateUrl: "pages/page3.html",
                controller: 'homeCtrl'
            })
            .state('page4', {
                url: "/page4/:param",
                templateUrl: "pages/page4.html",
                controller: 'homeCtrl'
            });

    })
    .controller('Menu', ['$scope', function($scope) {


    }])

.controller('homeCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {


    $scope.text = $stateParams.param;
    $scope.fname = 'Suputtana';
    $scope.lname = 'Pingmaung';

}]);
