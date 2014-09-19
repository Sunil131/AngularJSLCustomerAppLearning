app.controller('CustomerController', function ($scope, customerService) {

       
    $scope.customers = customerService.getCustomers();
    
    $scope.deleteCustomer = function (id) {
        customerService.deleteCustomers(id);
    }

   
    $scope.insertCustomers = function () {
        var firstName = $scope.newCustomer.FirstName;
        var lastName = $scope.newCustomer.LastName;
        var city = $scope.newCustomer.city;
        customerService.insertCustomers(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    function init() {
        //alert('test');
    }
   
    $scope.addCustomer = function () {
        $scope.customers.push($scope.newCustomer.firstName, $scope.newCustomer.lastName, $scope.newCustomer.city);
    };

});

app.controller('CustomerOrdersController', function ($scope) {
    alert("yohoo");
});