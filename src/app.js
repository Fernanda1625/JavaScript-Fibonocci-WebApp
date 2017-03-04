
var app = angular.module('fibonacci.app', []);

app.controller('main.controller', ['$scope', function($scope) {
    $scope.userInput = null;
    $scope.fibList = [];

    $scope.fib = function() {
        if ($scope.userInput >= 0 && $scope.userInput < 101) {
            $scope.fibList = calc();
        }
        else {
            alert("Please write a valid number!");
            $scope.userInput = 0;
        }
    };

    function calc() {
        var a, b, result;
        var list = [];

        a = 0;
        b = 1;
        result = 1;

        for (var i = 0; i < $scope.userInput + 11; i++) {
            list.push(a);
            result = a + b;
            a = b;
            b = result;
        }

        return list;
    }
}]);

