'use strict';

//Controller de la liste des données
 function EmployeeListController($scope, $location, EmployeeFactory) {
	 //Appel du service de la liste des collection
   $scope.listEmployees = EmployeeFactory.getEmployees();

    $scope.gotoTodoNewPage = function () {
        $location.path("/employee/new")
    };
    
	$scope.supprimerEmployee = function(currentEmploye){
		//Appel du service de suppression
		EmployeeFactory.supprimerEmployee(currentEmploye).then(function(data){
		 $scope.listEmployees = EmployeeFactory.getEmployees();
	});
	};
}

//Controlleur de gestion du detail
function EmployeeDetailController($scope, $routeParams, $location, EmployeeFactory) {
	//Recuperation du parametre
	var idparam = $routeParams.id ;
	//Appel du service de recuperation de l'employé choisi
	 EmployeeFactory.getEmployee(idparam).then(function(data){
		$scope.oneEmployee = data.data;
	});
		
     $scope.gotoRetour = function () {
        $location.path("/")
    }; 
	
	
}


//Controller de creation d'un nouvel employé
function EmployeeNewController($scope, $routeParams, $location, EmployeeFactory) {
	//Recuperer la valeur de l'id si 0 c-a-d creation sinon MAJS
	var idparam = ($routeParams.id) ? parseInt($routeParams.id) : 0 ;
	$scope.saveEmployee = function(currentEmployee){		
		if(idparam<=0){
			var currentEmployeeJsoned = angular.toJson(currentEmployee);
			EmployeeFactory.insertEmployee(currentEmployeeJsoned);
			//Prevoir un message de notification dans la liste
			//et un timeout pour le message
			
			$location.path("/");
			
		}
	}
	 $scope.gotoRetour = function () {
        $location.path("/");
    };
	
	}

	

//Controller d'edition de l' employé
function EmployeeEditController($scope, $routeParams, $location, EmployeeFactory) {
	//Recuperer la valeur de l'id 
	var idparam = $routeParams.id ;
	$scope.other ={};
	
	EmployeeFactory.getEmployee(idparam).then(function(data){
		$scope.other = data.data;
		console.log(data);
	});
		
	
	$scope.updateEmployee = function(){		
			EmployeeFactory.updateEmployee($scope.other);	
			//Prevoir un message de notification dans la liste
			//et un timeout pour le message
			
			$location.path("/");

	}
	 $scope.gotoRetour = function () {
        $location.path("/")
    };
	
	}