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
    stringDishes =  stringDishes.filter(str => /\S/.test(str));
    var MenuItems = stringDishes.split(',');

console.log(MenuItems);
console.log(stringDishes);
console.log(Dishes);
console.log($scope.Dishes);
      //stringDishes.removeAll(Arrays.asList("", null));
    if (MenuItems.length > 3) {$scope.LaunchMessage = "Too much!"}
        else {$scope.LaunchMessage = "Enjoy!"};
    if (Dishes == "") {$scope.LaunchMessage = "Please enter the data first!"}
  };
  };

  //console.log($injector.annotate(LaunchCheckController));
})();
