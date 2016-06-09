(function () {
  'use strict';

// Controlador
  function Step1Ctrl($scope,$http) {

    /*************LEER JSON************/
  
         $scope.propuestas = [];
          $http.get('propuestas.json')
            .then(function(res){
              $scope.propuestas = res.data.propuestas;
               console.log($scope.propuestas);

            }, function(res){
              $scope.propuestas = [{name: 'Error!! ' + res.status}];
            });
    /**********************************/
}

// Controlador
  function Step2Ctrl($scope,$http, $routeParams) {

  // $scope.id = $routeParams.id - 1; //resto uno para que se corresponda con la posicion en el array
  // console.log('posicion del array: ' + $scope.id);
    /*************LEER JSON************/
  
         $scope.propuestas = [];
          $http.get('propuestas.json')
            .then(function(res){
              $scope.propuestas = res.data.propuestas;
               console.log($scope.propuestas[0]);

            }, function(res){
              $scope.propuestas = [{name: 'Error!! ' + res.status}];
            });
    /**********************************/
}

  /***************************************************************/
  angular
    .module('wizard.controllers', [])
    .controller('Step1Ctrl',  Step1Ctrl)
    .controller('Step2Ctrl',  Step2Ctrl);
})();
 