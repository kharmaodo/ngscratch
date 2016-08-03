'use strict';

angular.module('myApp', ['employeeService']). 
 config(['$routeProvider', function ($routeProvider) { 

        $routeProvider.
            when('/employee/list', {templateUrl:'views/employee-list.html',   controller:EmployeeListController}).
            when('/employee/new',  {templateUrl:'views/employee-create.html',    controller:EmployeeNewController}).
            when('/employee/:id',  {templateUrl:'views/employee-detail.html', controller:EmployeeDetailController}).
			when('/employee/edit/:id',  {templateUrl:'views/employee-edition.html', controller:EmployeeEditController}).
            otherwise({redirectTo:'/employee/list'});
}]);


