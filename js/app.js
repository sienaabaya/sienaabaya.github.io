   var app = angular.module('portfolio', ['ngAnimate']).config(function($interpolateProvider){
       $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
   });