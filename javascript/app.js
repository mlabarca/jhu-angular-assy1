(function () {
  'use strict'
  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope) {

    $scope.dishesPlaceholder = 'list comma separated dishes you usually have for lunch';
    $scope.checkTooMuch = function(){
      var trimmedDishes = $scope.dishes.trim();
      console.log(trimmedDishes); 
    };
  }
})();