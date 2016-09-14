(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LaunchCheckController);
LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.LaunchMessage = "";
  $scope.Dishes = "";
  $scope.Checker = function (Dishes) {
    var stringDishes = Dishes.trim();
    var MenuItems = stringDishes.split(',').filter(str => /\S/.test(str));
    if (MenuItems.length > 3) {
      $scope.LaunchMessage = "Too much!"
      $scope.fontColor = "GreenFont";
      $scope.borderColor = "GreenBorder";
    }
        else {
          $scope.LaunchMessage = "Enjoy!"
          $scope.fontColor = "GreenFont";
          $scope.borderColor = "GreenBorder";
        };
    if (Dishes == "") {
      $scope.LaunchMessage = "Please enter the data first!"
      $scope.fontColor = "RedFont";
      $scope.borderColor = "RedBorder";
      }
  };
  };
})();
