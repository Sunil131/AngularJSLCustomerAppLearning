var CustomerApp = angular.module("CustomerApp", ['ngRoute']);

CustomerApp.config(function ($routeProvider) {
    $routeProvider
        .when('customers',
            {
                controller: '',
                templateUrl:''
            })
            .when('/customerOrders',
            {
                controller: '',
                templateUrl:''
            })
            .when('/orders',
            {
                controller: '',
                templateUrl:''
            }
        )
    });
