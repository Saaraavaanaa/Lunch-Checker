(function() {
    'use strict';
    angular.module("main", [])
        .controller('LunchCheckController', link);
    link.$inject = ["$scope"];
    var Items = [];

    function link($scope) {
        $scope.items = "";
        $scope.message = "";
        $scope.green_opacity = "";
        $scope.red_opacity = "";

        $scope.check = function() {
            var array = $scope.items.split(',');
            var counter = 0;
            array.forEach((items) => {
                if (items != false) {
                    counter++;
                }
            });
            if (counter > 0 && counter < 4) {
                $scope.message = "Enjoy!!!!!";
                $scope.green_opacity = "green";
                $scope.red_opacity = "";


            } else if (counter >= 4) {
                $scope.message = "Too much !!";
                $scope.red_opacity = "red";
                $scope.green_opacity = "";

            } else {
                $scope.message = "Plz enter the data first";
            }


        }

    }
})();