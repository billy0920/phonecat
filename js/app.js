'use strict';


// Declare app level module which depends on filters, and services
angular.module('phonecatApp', ['phonecatApp.filters', 'phonecatApp.services', 'phonecatApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/phones',
                {template: 'partials/phone-list.html',   controller: PhoneListCtrl});
    $routeProvider.when('/phones/:phoneId',
                {template: 'partials/phone-detail.html', controller: PhoneDetailCtrl});
    $routeProvider.when('/about',
                {template: 'partials/about.html', controller: AboutCtrl});	
    $routeProvider.when('/contract',
                {template: 'partials/contract.html', controller: AboutCtrl});	
	$routeProvider.otherwise({redirectTo: '/phones'});
  }]);
