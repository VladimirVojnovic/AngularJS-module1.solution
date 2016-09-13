(function(){
'use strict';

angular.module('LaunchCheck',[])
.controller('LaunchCheckController', LaunchCheckController);

LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.LaunchMessage = "";
  $scope.Dishes = "";
  $scope.MenuItems = [];
  $scope.Checker = function ($scope.Dishes) {
    var stringDishes = $scope.Dishes.trim();
    if (stringDishes="") {$scope.LaunchMessage = "Please enter data first"}
    else {var $scope.MenuItems = stringDishes.split(",")};
    if (MenuItems.length > 3) {$scope.LaunchMessage = "Too much!"}
    else {$scope.LaunchMessage = "Enjoy!"};

  };


  //console.log($injector.annotate(LaunchCheckController));
};

})();
