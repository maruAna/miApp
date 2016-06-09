(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'templates/listado.tpl.html',
        controller: 'Step1Ctrl'
      })
      .when('/detalle/:id', {
        templateUrl: 'templates/detalles.tpl.html',
        controller: 'Step2Ctrl'
      })
     

      .otherwise({ reditrectTo : '/' });

  } 



  angular
    .module('wizard', ['ngRoute','wizard.controllers','ui.bootstrap'])
    .config(config);

   

})();

