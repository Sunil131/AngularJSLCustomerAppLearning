var app = angular.module('customersApp', ['ngRoute']);

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
            .when('/customerOrders',
            {
                controller: '',
                templateUrl: '/partials/customerOrders.html'
            })
            .when('/orders',
            {
                controller: '',
                templateUrl:'orders.html'
            }
        )
    });



