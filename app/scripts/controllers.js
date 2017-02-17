(function () {
  'use strict';



  /***************************************************************/
  angular
    .module('marielaPrueba.controllers', [])
    .controller('marielaCtrl', marielaCtrl);


    function marielaCtrl($scope) {
      $scope.nombre = 'Mariela';
      $scope.arreglo=[];
      
      for(var i=0; i<100; i++)
      {
          $scope.arreglo.push(i);
      }

      
    }



})();
 