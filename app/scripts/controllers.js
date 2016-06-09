(function () {
  'use strict';

// Controlador
  function WizardCtrl($scope,$http, $routeParams) {

  $scope.template = {'nav': 'templates/menu-nav.tpl.html',
                    'step1': 'templates/listado.tpl.html',
                    'step2': 'templates/detalles.tpl.html',
                    'step3': 'templates/plan-pagos.tpl.html'};
 
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

  // $scope.id = $routeParams.id - 1; //resto uno para que se corresponda con la posicion en el array
  // console.log('posicion del array: ' + $scope.id);
    /*************LEER JSON - POR OBJETO************/
  
         $scope.detalle = [];
          $http.get('propuestas.json')
            .then(function(res){
              $scope.detalle = res.data.propuestas;
               console.log($scope.detalle[0]);

            }, function(res){
              $scope.detalle = [{name: 'Error!! ' + res.status}];
            });
    /**********************************/
}



  /***************************************************************/
  angular
    .module('wizard.controllers', [])
    .controller('WizardCtrl',  WizardCtrl);
})();
 