(function() {
    'use strict';
    angular.module("main", [])
        .controller('LunchCheckController', link);
    link.$inject = ["$scope"];

    function link($scope) {
        $scope.items = "";
        $scope.message = "";

        $scope.check = function() {
            var array = $scope.items.split(',');
            var counter = 0;
            array.forEach((items) => {
                if (items != false) {
                    counter++;
                }
            });
            if (counter > 0 && counter < 4) {
                $scope.message = "Enjoy";


            } else if (counter >= 4) {
                $scope.message = "Too much !!";

            } else {
                $scope.message = "Plz enter the data first";

            }
        }

    }
})();