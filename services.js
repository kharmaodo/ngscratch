'use strict';

//Usage du service de consommation de l'api rest avec un Factory et une constante servant d'API
angular.module('employeeService', ['ngResource']).
        factory('EmployeeFactory', ['$http', function($http) {
  var serviceBase = 'http://localhost:9800/api/xresource/' ;
    var obj = [];
	//Fonctionnalité de recuperation de toutes les collections dans MongoDB
    obj.getEmployees = function(){
        return $http.get(serviceBase + 'employees');
    } ;
		
	//Recupere un employe par son id
	obj.getEmployee = function(objectEmployeeId){
        return $http.get(serviceBase + 'employee?id=' +objectEmployeeId);
    } ;	
	
	//Insertion d'un employee
	obj.insertEmployee = function(employee){		
		return $http.post(serviceBase + 'addEmployee', employee).then(function (results){
			 return results;
			 
				 });
	};
	
	
	//Insertion d'un employee
	obj.updateEmployee = function(employee){		
		return $http.put(serviceBase + 'employee', employee).then(function (results){
			 return results;
				 });
	};
	//http://stackoverflow.com/questions/17379447/angularjs-and-jersey-rest-delete-operation-fails-with-415-status-code
	obj.supprimerEmployee = function(objectEmployeeId){		
		return $http.delete(serviceBase +'employee?id=' +objectEmployeeId);
	};
    return obj;   
}]);



