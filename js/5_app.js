'use strict';

angular.module('ngApp', [])
.controller('homeCtrl', function($scope, $http) {
    $scope.IsVisible = false;
    $scope.ShowHide = function() {
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }

    $http.get('http://127.0.0.1/ngApp/api/5_api.php')
        .success(function(res) {
            $scope.data = res[0];
            if ($scope.data.status == 'ok') {
                $scope.members = $scope.data.data;
            } else {
                alert("Something went wrong");
            }
        })
        .error(function(err) {
            alert("Something went wrong");
        });

});

