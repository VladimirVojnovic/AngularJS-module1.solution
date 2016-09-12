(function(){
'use strict';

angular.module('LaunchCheck',[])
.controller('LaunchCheckController', LaunchCheckController);

LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.Checker = function () {
    var stringDishes = $scope.Dishes;
    str.trim(stringDishes);
    var LaunchMessage = "";
    if (stringDishes="") {LaunchMessage = "Please enter data first"}
    else {var MenuItems = stringDishes.split(",");};


    if (MenuItems.length > 3) {LaunchMessage = "Too much!"}
    else {LaunchMessage = "Enjoy!"};

  };
    //console.log($injector.annotate(LaunchCheckController));
}

})();
