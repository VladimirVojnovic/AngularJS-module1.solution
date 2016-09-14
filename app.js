(function(){
'use strict';
angular.module('LaunchCheck',[])
.controller('LaunchCheckController', LaunchCheckController);
LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.LaunchMessage = "";
  $scope.Dishes = "";
  $scope.Checker = function (list) {
//    var stringDishes = $scope.Dishes.trim();
    list = list.trim();
    list = list.split(',');
    list = list.filter(str => /\S/.test(str));
    if (list.length > 3) {$scope.LaunchMessage = "Too much!"}
        else {$scope.LaunchMessage = "Enjoy!"};
    if ($scope.Dishes = "") {$scope.LaunchMessage = "Please enter the data first!"}
    }
  };

  //console.log($injector.annotate(LaunchCheckController));
})();
