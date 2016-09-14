(function(){
'use strict';
angular.module('LunchCheck',[])
 .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
 function LunchCheckController ($scope){
   $scope.listOfFood = "";
   $scope.checkLunchResult = "";
   $scope.checkLunch = function(list){
     list = list.split(',');
     list.filter(str => /\S/.test(str));/*triend arrow function*/
     //list = list.split(',').filter(function(str){return /\S/.test(str)} );
     if(list.length > 3){
       $scope.checkLunchResult = "Too much!"
       $scope.changeFont = "bad";
     } else {
       $scope.checkLunchResult = "Enjoy!"
       $scope.changeFont = "good";
     }
     if($scope.listOfFood != ""){
       $scope.changeBorder = "greenBorder";
     } else {
       $scope.changeBorder = "redBorder";
       $scope.checkLunchResult = "";
     }
   };
 };
})();
