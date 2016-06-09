(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/listado', {
        templateUrl: 'templates/menu-nav.tpl.html',
        controller: 'WizardCtrl'
      })
  
     
     

      .otherwise({ reditrectTo : '/listado' });

  } 



  angular
    .module('wizard', ['ngRoute','wizard.controllers','ui.bootstrap'])
    .config(config);

   

})();

