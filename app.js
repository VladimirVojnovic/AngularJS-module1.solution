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
    list = list.split(',').filter(str => /\S/.test(str));
    if (Dishes.trim() = "") {$scope.LaunchMessage = "Please enter data first"}
    else {
    if (MenuItems.length > 3) {$scope.LaunchMessage = "Too much!"}
    else {$scope.LaunchMessage = "Enjoy!"};
    }

  };


  //console.log($injector.annotate(LaunchCheckController));
};

})();
