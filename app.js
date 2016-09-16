angular
    .module("myApp", [])
    .controller("mainController", function ($scope) {
        $scope.posts = [];
        $scope.edit = false;
        $scope.del = false;
        $scope.show = false;
        $scope.newPost = { text: "" };
        $scope.submit = function () {
            $scope.posts.push($scope.newPost);
            $scope.newPost = { text: "" };
        };
        $scope.del = function (x) {
            x.text = "";
            return x;
        }
    });