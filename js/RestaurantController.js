restaurantList.controller('RestaurantCtrl', function RestaurantCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName,
                              price: $scope.restaurantPrice,
                              type: $scope.restaurantType,
                              location: $scope.restaurantLocation
                              });
    $scope.restaurantName = null;
    $scope.restaurantPrice = null;
    $scope.restaurantType = null;
    $scope.restaurantLocation = null;

  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant)
    $scope.restaurants.splice(index, 1);
  };
});
