//var app = angular.module('customersApp', ['ngRoute']);
var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
         .when('/',
            {
                controller: 'CustomerController',
                templateUrl: '/partials/customers.html'
            })
        .when('/customers',
            {
                controller: 'CustomerController',
                templateUrl:'/partials/customers.html'
            })
            .when('/customerOrders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/partials/customerOrders.html'
            })
            .when('/orders',
            {
                controller: 'ordersController',
                templateUrl:'/partials/orders.html'
            }
        )
    });



