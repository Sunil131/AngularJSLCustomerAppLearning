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
        $scope.newCustomer.FirstName = '';
        $scope.newCustomer.LastName = '';
        $scope.newCustomer.city = '';
    };

    function init() {
        //alert('test');
    }
   
    $scope.addCustomer = function () {
        $scope.customers.push($scope.newCustomer.firstName, $scope.newCustomer.lastName, $scope.newCustomer.city);
    };

});

app.controller('CustomerOrdersController', function ($scope, $routeParams, customerService) {
    
    $scope.customer = {};

    var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0
//    alert(customerID);
    if (customerID > 0) {
        $scope.customer = customerService.getCustomer(customerID);

    }
    
});
app.controller('orderTableController', function ($scope) {
    $scope.orderBy = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        if ($scope.customer && $scope.customer.orders) {
            var total = 0.00;
            for (var i = 0; i < $scope.customer.orders.length; i++) {
                var order = $scope.customer.orders[i];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }
});
app.controller('ordersController', function ($scope,customerService) {
    $scope.customers = customerService.getCustomers();
});