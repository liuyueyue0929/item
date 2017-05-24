/**
 * Created by Administrator on 5/18 0004.
 */
var app = angular.module("app", []);
app.controller("Team", function ($scope, $http, $filter) {
    $scope.num = 5;
    $scope.arr = [];
    $scope.times = 0;
    $scope.index = 1;
    $scope.pageSize =0;
     console.log($scope.tet);
    $http.get("js/data.json")
        .success(function (data) {
            $scope.json=data;
            $scope.init(data);
        });
    $(document).on("keyup",function(e){
        if(e.keyCode==13) {
            $scope.init($scope.json);
        }
    })
    $scope.init=function(data){
        $scope.list = $filter("filter")(data,$scope.tet);
        $scope.pageSize = Math.ceil($scope.list.length / $scope.num);
        $scope.arr=[];
        for (var i = 0; i < $scope.pageSize; i++) {
            $scope.arr.push(i + 1);
        }
        $scope.go(1);
    }
    $scope.go = function (ind) {
        $scope.index = ind;
        $scope.times = (ind-1)*$scope.num;
        var data = $scope.list.slice($scope.num*(ind-1),$scope.num*ind);
        $scope.data = data;
    };
    $scope.prev = function () {
        if($scope.index<=1)return;
        $scope.go(--$scope.index)
    }
    $scope.next = function () {
        if($scope.index>=$scope.pageSize)return;
        $scope.go(++$scope.index)
    }
    $scope.remove = function (item) {
        $scope.data.splice(item, 1);
    };
    $scope.revise = function (i) {
        var time = getDate();
        var obj = {
            "coding": $scope.code,
            "name": $scope.name,
            "type": $scope.type,
            "time": time,
            "status": "有效",
            "revise": "修改",
            "operate": "删除"
        };
        $scope.data.splice(i, 1, obj)
    };
    $scope.fn = function () {
        var time = getDate()
        var obj = {
            "coding": $scope.code,
            "name": $scope.name,
            "type": $scope.type,
            "time": time,
            "status": "有效",
            "revise": "修改",
            "operate": "删除"
        };
        $scope.data.push(obj)
    };
    function getDate() {
        var date = new Date();
        var time = date.toLocaleDateString();
        return time;
    }
});