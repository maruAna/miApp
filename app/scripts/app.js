(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'templates/menu-nav.tpl.html',
        controller: 'WizardCtrl'
      })
  
     
     

      .otherwise({ reditrectTo : '/' });

  } 



  angular
    .module('wizard', ['ngRoute','wizard.controllers','ui.bootstrap'])
    .config(config);

   

})();

