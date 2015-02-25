//$(function(){
   var app = angular.module('portfolio', []).config(function($interpolateProvider){
       $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
   });
//   app.controller('tabController', function(){
//      this.tab=1;
//      this.setTab = function(selectedTab){
//          this.tab = setTab;
//      };
//      this.isSet = function(isSelected){
//          this.tab = isSelected;
//      };
//   });
//});