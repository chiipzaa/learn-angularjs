'use strict';

angular.module('ngApp', ['ngService'])

.controller('homeCtrl', function($scope, $http, singletonService, memberService) {

    $scope.IsVisible = false;

    $scope.ShowHide = function() {
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }

    singletonService.setText('This text from  Service()');
    $scope.text = singletonService.getText();
   
    $scope.hello = memberService.sayHello();
    $scope.members = memberService.getList();



});
