(function () {
  'use strict';

  function Step1Ctrl($scope,$http) {

    /*************LEER JSON************/
  
         $scope.propuestas = [];
          $http.get("propuestas.json")
            .then(function(res){
              $scope.propuestas = res.data.propuestas;
               console.log($scope.propuestas);

            }, function(res){
              $scope.propuestas = [{name: "Error!! " + res.status}];
            });
    /**********************************/
}


  /***************************************************************/
  angular
    .module('wizard.controllers', [])
    .controller('Step1Ctrl',  Step1Ctrl);
})();
 