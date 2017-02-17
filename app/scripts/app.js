(function () {
  'use strict';



 
  function config ($routeProvider) {
   
    $routeProvider
      .when('/', {
        templateUrl: 'templates/marielita.tpl.html',
        controller: 'marielaCtrl'
      })
      
  
     
     

      .otherwise({ reditrectTo : '/' });

  } 



  angular
    .module('marielaPrueba', ['ngRoute','marielaPrueba.controllers','ui.bootstrap'])
    .config(config);

   

})();

