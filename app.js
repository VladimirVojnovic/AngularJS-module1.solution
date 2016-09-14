(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LaunchCheckController);
LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.LaunchMessage = "";
  $scope.Dishes = "";
  var MenuItems = [];
  $scope.Checker = function (Dishes) {
    var stringDishes = Dishes.trim();
    MenuItems = stringDishes.split(',');
    MenuItems.removeAll(Arrays.asList("", null));
    if (MenuItems.length > 3) {$scope.LaunchMessage = "Too much!"}
        else {$scope.LaunchMessage = "Enjoy!"};
    if (Dishes == "") {$scope.LaunchMessage = "Please enter the data first!"}
  };
  };

  //console.log($injector.annotate(LaunchCheckController));
})();
