'use strict';

angular.module('ngApp', [])

.controller('homeCtrl', function($scope) {

    $scope.IsVisible = false;

    $scope.ShowHide = function() {
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }



    $scope.members = [{
        fname: 'Suputtana',
        lname: 'Pingmaung',
        email: 'kukks205@udonsoft.com',
        imgUrl: 'img/1.jpg'
    }, {
        fname: 'Jonh',
        lname: 'Dee',
        email: 'jonh@udonsoft.com',
        imgUrl: 'img/2.jpg'
    }, {
        fname: 'Mongkol',
        lname: 'Salee',
        email: 'mm@udonsoft.com',
        imgUrl: 'img/3.jpg'
    }, {
        fname: 'Sangwan',
        lname: 'Tong',
        email: 'sang@udonsoft.com',
        imgUrl: 'img/4.jpg'
    }, {
        fname: 'Tongdee',
        lname: 'Dum',
        email: 'tong@udonsoft.com',
        imgUrl: ''
    }];

});
