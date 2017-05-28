/**
 * Created by Administrator on 2017/5/26.
 */
app.service("fenye", function () {
    return function ($scope) {
        $scope.showpage = function (i) {
            var olddata = $scope.filedata();
            $scope.show = true;
            $scope.hide = false;
            $scope.shuju = olddata.length;
            $scope.allpage = olddata.length / $scope.maxLength;
            $scope.page = [];
            for (var j = 2; j < $scope.allpage; j++) {
                $scope.page.push(j)
            }
            $scope.len = ($scope.num - 1) / 2;
            $scope.current = i - 1;
            $scope.boll1 = false;
            $scope.boll2 = false;
            if ($scope.current < $scope.num - $scope.len) {
                $scope.boll1 = false;
                $scope.boll2 = true;
                $scope.arrnum = [];
                for (var i = 1; i <= $scope.num; i++) {
                    $scope.arrnum.push(i)
                }
            } else if ($scope.current >= $scope.num - $scope.len && $scope.current <= $scope.allpage - ($scope.num - 1) / 2 - 2) {
                $scope.boll1 = true;
                $scope.boll2 = true;
                if ($scope.current == $scope.num - $scope.len) {
                    $scope.boll1 = false;
                }
                if ($scope.current == $scope.allpage - ($scope.num - 1) / 2 - 2) {
                    $scope.boll2 = false;
                }

                $scope.arrnum = [$scope.current + 1]
                for (var i = 0; i < $scope.len; i++) {
                    $scope.arrnum.push($scope.current - i)
                }
                for (var i = 2; i <= $scope.len + 1; i++) {
                    $scope.arrnum.push($scope.current + i)
                }
            } else {
                $scope.boll1 = true;
                $scope.boll2 = false;
                $scope.arrnum = []
                for (var i = 1; i < $scope.num; i++) {
                    $scope.arrnum.push($scope.allpage - i)
                }
            }
            if ($scope.allpage <= 6) {
                $scope.boll1 = false;
                $scope.boll2 = false;
            }
            if ($scope.allpage < 2) {
                $scope.show = false
            }
            if ($scope.allpage == 0) {
                $scope.hide = true
            }
            $scope.cutoutData(i)
        };
        $scope.cutoutData = function () {
            var newData = $scope.filedata();
            $scope.arr = newData.splice($scope.current * $scope.maxLength, $scope.maxLength)
        };
        $scope.showpage(1);
        $scope.changeIndexfn = function (i) {
            $scope.showpage(i);
        }
        $scope.updown = function (i) {
            if (i == "+") {
                if (($scope.current + 1) < $scope.allpage) {
                    $scope.showpage($scope.current + 2)
                }
            } else {
                if ($scope.current > 0) {
                    $scope.showpage($scope.current)
                }
            }
        }
        $scope.changeInput = function () {
            $scope.showpage($scope.valueDATA)
        }
    }
});