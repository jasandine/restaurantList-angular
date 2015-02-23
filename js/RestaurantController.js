restaurant.controller('RestaurantCtrl', function RestaurantCtrl($scope) {
 $scope.restaurants = [];
 $scope.addRestaurant = function() {
   $scope.restaurants.push({ name: $scope.restaurantName });
   $scope.restaurantName = null;
 };
 
})
