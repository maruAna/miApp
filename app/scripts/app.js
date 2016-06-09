(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'templates/listado.tpl.html',
        controller: 'Step1Ctrl'
      })
     

      .otherwise({ reditrectTo : '/' });

  } 



  angular
    .module('wizard', ['ngRoute','wizard.controllers','ui.bootstrap'])
    .config(config);

   

})();

