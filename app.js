(function(){
'use strict';

angular.module('LaunchCheck',[])
.controller('LaunchCheckController', LCController($scope));

LaunchCheckController.$inject = ['$scope'];
function LCController($scope){
  var LaunchMessage = "";
  console.log($scope.Dishes);
    var stringDishes = $scope.Dishes;
    str.trim(stringDishes);

    if (stringDishes="") {LaunchMessage = "Please enter data first"}
    else {var MenuItems = stringDishes.split(",");};


    if (MenuItems.length > 3) {LaunchMessage = "Too much!"}
    else {LaunchMessage = "Enjoy!"};

  //console.log($injector.annotate(LaunchCheckController));
  }

})();
