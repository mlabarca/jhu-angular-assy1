(function () {
  'use strict'
  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.dishes = '';
    $scope.dishesPlaceholder = 'List comma separated dishes you usually have for lunch';
    
    // Strip spaces and remove empty dishes from scope.dishes
    var getDishList = function(){
      var trimmedDishList = $scope.dishes.trim().split(',');
      var filteredDishList = trimmedDishList.filter(function(el){return el.length != 0});
      return filteredDishList
    };
    
    // Change messages and placeholder when button clicked according to input value
    $scope.checkTooMuch = function(){
      var dishList = getDishList();
      if (dishList.length < 1){
        $scope.dishesPlaceholder = 'Please enter data first';
        $scope.message = 'Please enter data first';
        $scope.dishes = '';
      } else if (dishList.length < 4){
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  }
})();