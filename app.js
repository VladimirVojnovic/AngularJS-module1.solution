(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LaunchCheckController);
LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.LaunchMessage = "";
  $scope.Dishes = "";
  $scope.Checker = function (list) {
//    var stringDishes = $scope.Dishes.trim();
    list = list.trim();
    list = list.split(',');
    list = list.removeAll(Arrays.asList("", null));
    if (list.length > 3) {$scope.LaunchMessage = "Too much!"}
        else {$scope.LaunchMessage = "Enjoy!"};
    if ($scope.Dishes == "") {$scope.LaunchMessage = "Please enter the data first!"}
  };
  };

  //console.log($injector.annotate(LaunchCheckController));
})();
