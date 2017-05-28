/**
 * Created by Administrator on 2017/5/26.
 */
app.config(function (alldata, $stateProvider, $urlRouterProvider) {
    alldata.fstdata.forEach(function (i) {
        $urlRouterProvider.otherwise("/system");
        $stateProvider
            .state(i.route, {
                url: "/" + i.route,
                templateUrl: "page/slider.html",
                controller: function ($scope, alldata) {
                    $scope.second = [];
                    alldata.secdata.forEach(function (item) {
                        if (item.parentid == i.id) {
                            $scope.first = i.name;
                            $scope.second.push(item)
                        }
                    });
                }
            })
    });
    alldata.secdata.forEach(function (i) {
        $urlRouterProvider.otherwise("/system/role")
        $stateProvider
            .state(i.route, {
                url: "/" + i.enName,
                templateUrl: "page/" + i.enName + ".html",
                controller: function ($scope, alldata, fenye, $filter) {
                    $scope.second = i;
                    var cutfn = function () {
                        $scope.datas = alldata.thirdata;
                        $scope.maxLength = 1;
                        $scope.num = 3;
                        $scope.filedata = function () {
                            return $filter('filter')($scope.datas, {
                                role: $scope.part,
                                state: $scope.status,
                                loginname: $scope.register
                            })
                        };
                        fenye($scope);
                        $scope.showpage(1);
                        $scope.inquire = function () {
                            $scope.showpage(1);
                        };
                        $scope.popupSH = false;
                        $scope.delete = function (i) {
                            $scope.popupSH = true;
                            $scope.okFn = function () {
                                $scope.filedata().forEach(function (item, index) {
                                    switch (item.ID) {
                                        case i.ID:
                                        {
                                            $scope.indexpage = Math.ceil(index / $scope.maxLength)
                                        }
                                    }
                                });
                                $scope.datas.forEach(function (item, index) {
                                    switch (item.ID) {
                                        case i.ID:
                                        {
                                            $scope.datas.splice(index, 1)
                                        }
                                    }
                                });
                                $scope.showpage($scope.indexpage);
                                $scope.popupSH = false
                            };
                            $scope.noFn = function () {
                                $scope.popupSH = false
                            }
                        }
                        $scope.alter = function (ind) {
                            $scope.boll = true;
                            $(".login").val($scope.arr[ind].loginname);
                            $(".user").val($scope.arr[ind].name);
                            $(".role").val($scope.arr[ind].role);
                            $(".tel").val($scope.arr[ind].telephone);
                            $(".mail").val($scope.arr[ind].email);
                            $(".state").val($scope.arr[ind].state);
                            $(".create").val($scope.arr[ind].creattime);
                            $(".adds").val($scope.arr[ind].add);
                            $(".removes").val($scope.arr[ind].remove);
                            $scope.sure = function () {
                                var obj = {};
                                obj.ID = $scope.arr[ind].ID;
                                obj.loginname = $(".login").val();
                                obj.name = $(".user").val();
                                obj.role = $(".role").val();
                                obj.telephone = $(".tel").val();
                                obj.email = $(".mail").val();
                                obj.state = $(".state").val();
                                obj.creattime = $(".create").val();
                                obj.add = $(".adds").val();
                                obj.remove = $(".removes").val();
                                $scope.arr.splice(ind, 1, obj);
                                for (var i = 0; i < $scope.datas.length; i++) {
                                    if ($scope.datas[i].ID == obj.ID) {
                                        $scope.datas.splice(i, 1, obj)
                                    }
                                }
                                $scope.boll = false;
                            };
                            $scope.cancel = function () {
                                $scope.boll = false;
                            }
                        };
                    };
                    var userfn = function () {
                        $scope.datas = alldata.fourdata;
                        $scope.maxLength = 1;
                        $scope.num = 3;
                        $scope.filedata = function () {
                            return $filter('filter')($scope.datas, {
                                role: $scope.part,
                                state: $scope.status,
                                loginname: $scope.register
                            })
                        };
                        fenye($scope);
                        $scope.showpage(1);
                        $scope.inquire = function () {
                            $scope.showpage(1);
                        };
                        $scope.popupSH = false;
                        $scope.delete = function (i) {
                            $scope.popupSH = true;
                            $scope.okFn = function () {
                                $scope.filedata().forEach(function (item, index) {
                                    switch (item.ID) {
                                        case i.ID:
                                        {
                                            $scope.indexpage = Math.ceil(index / $scope.maxLength)
                                        }
                                    }
                                });
                                $scope.datas.forEach(function (item, index) {
                                    switch (item.ID) {
                                        case i.ID:
                                        {
                                            $scope.datas.splice(index, 1)
                                        }
                                    }
                                });
                                $scope.showpage($scope.indexpage);
                                if ($scope.showpage($scope.indexpage) == 1) {
                                    $scope.showpage(1);
                                }
                                $scope.popupSH = false
                            };
                            $scope.noFn = function () {
                                $scope.popupSH = false
                            }
                        }
                        $scope.alter = function (ind) {
                            $scope.boll = true;
                            $(".role").val($scope.arr[ind].role);
                            $(".orders").val($scope.arr[ind].orders);
                            $(".state").val($scope.arr[ind].state);
                            $(".create").val($scope.arr[ind].creattime);
                            $(".adds").val($scope.arr[ind].add);
                            $(".removes").val($scope.arr[ind].remove);
                            $scope.sure = function () {
                                var obj = {};
                                obj.ID = $scope.arr[ind].ID;
                                obj.role = $(".role").val();
                                obj.orders = $(".orders").val();
                                obj.state = $(".state").val();
                                obj.creattime = $(".create").val();
                                obj.add = $(".adds").val();
                                obj.remove = $(".removes").val();
                                $scope.arr.splice(ind, 1, obj);
                                for (var i = 0; i < $scope.datas.length; i++) {
                                    if ($scope.datas[i].ID == obj.ID) {
                                        $scope.datas.splice(i, 1, obj)
                                    }
                                }
                                $scope.boll = false;
                            };
                            $scope.cancel = function () {
                                $scope.boll = false;
                            }
                        };
                    };
                    switch (i.id) {
                        case 22:
                        {
                            cutfn()
                        }
                            break;
                        case 23:
                        {
                            userfn()
                        }
                            break;
                    }
                }
            })
    })
});