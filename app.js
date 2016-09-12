(function(){
'use strict';

angular.module('LaunchCheck',[]);
.controller('LaunchCheckController', LaunchCheckController);

LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope, $injector){
  $scope.Checker = function () {
    var stringDishes = $scope.Dishes;
    str.trim(stringDishes);
    var message = "";
    if (stringDishes="") {message = "Please enter data first"}
    else {var MenuItems = stringDishes.split(",");};


    if (MenuItems.length > 3) {message = "Too much!"}
    else {message = "Enjoy!"};

  };
   // console.log($injector.annotate(LaunchCheckController));
};

})();
