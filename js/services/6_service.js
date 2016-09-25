'use strict';

angular.module('ngService', [])
.factory('memberService', function($http) {
    return {
        sayHello: function() {
            return "Hello, This this below data From factory()";
        },
        getList: function() {
            var obj = [];
            var num = null;

            $http.get('http://127.0.0.1/ngApp/api/5_api.php')
                .success(function(res) {
                    var num = res[0].data.length;
                    for (var i = 0; i < num; i++) {
                        obj.push(res[0].data[i]);
                    }
                })
                .error(function(err) {

                });
            return obj;
        }
    };
})
.service('singletonService', function() {
    this.text = "First Text";
    this.setText = function(text) {
        this.text = text;
    };
    this.getText = function() {
        return this.text;
    };
});

/*.factory('MembersService', function() {
    return {

        return {
            getList: function() {
                return "Hello, World From factory()";
            }
        };
    }
});*/


/*   getList: function () {
     
     $http.get('http://127.0.0.1/ngApp/api/5_api.php')
     .success(function(res){

       var data = res[0].data;

     })
     .error(function(err) {

       var data = "ERROR";
       
     });

       return data; 
   }*/
/*.factory('MembersService', function($http) {
    return {
        getList: function() {

            $http.get('http://127.0.0.1/ngApp/api/5_api.php')
                .success(function(res) {
                    if (res[0].status == 'ok') {
                        $scope.members = res[0].data;
                    } else {
                        $scope.members ="Something went wrong";
                    }
                })
                .error(function(err) {
                    $scope.members ="Something went wrong";
                });


            return $scope.members;

        }
    };
});*/
