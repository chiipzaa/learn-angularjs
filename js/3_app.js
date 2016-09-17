'use strict';

angular.module('ngApp', [])

.controller('homeCtrl', function($scope) {

    $scope.members = [{
        fname: 'Suputtana',
        lname: 'Pingmaung',
        email: 'kukks205@udonsoft.com'
    }, {
        fname: 'Jonh',
        lname: 'Dee',
        email: 'jonh@udonsoft.com'
    }, {
        fname: 'Mongkol',
        lname: 'Salee',
        email: 'mm@udonsoft.com'
    }, {
        fname: 'Sangwan',
        lname: 'Tong',
        email: 'sang@udonsoft.com'
    }, {
        fname: 'Tongdee',
        lname: 'Dum',
        email: 'tong@udonsoft.com'
    }];

});
