'use strict';

angular.module('ngApp', [])

.controller('homeCtrl', function($scope, $http) {


    $scope.loadAll = function() {
        $http.get('http://127.0.0.1/ngApp/api/7_api.php')
            .success(function(res) {
                $scope.members = res;
            })
            .error(function(err) {
                alert("Something went wrong");
            });
    }

    $scope.loadAll();

    $scope.resetSuccess = function(){
      $scope.process =null;  
    }

    $scope.data = {};
    $scope.postData = function() {
        $http
            .post("http://127.0.0.1/ngApp/api/7_api_post.php", $scope.data)
            .success(function(res) {
                $scope.num = res.row;
                if ($scope.num > 0) {
                    $scope.process = "ok";
                } else {
                    $scope.process = "oo";
                }
                $scope.loadAll();
            })
            .error(function(err) {
                $scope.process = "no";
            });
    }

    $scope.selectData = function(user) {
        $scope.IsVisible = true;
        for (var i = 0; i < $scope.members.length; i++) {
            if ($scope.members[i].username == user) {
                $scope.data.username = $scope.members[i].username;
                $scope.data.password = $scope.members[i].password;
                $scope.data.fname = $scope.members[i].fname;
                $scope.data.lname = $scope.members[i].lname;
                $scope.data.tel = $scope.members[i].tel;
                $scope.data.email = $scope.members[i].email;
                $scope.data.imgUrl = $scope.members[i].imgUrl;
            }
        }
    }
});
