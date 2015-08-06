'use strict';

gosukaApp.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise(function($injector){
    var $state = $injector.get('$state');
    $state.go('main');
  });

  // Now set up the states
  $stateProvider

  .state('main', {
    url: '/main',
    templateUrl: 'views/offers/index.html',
    controller: 'OfferIndexController'
  })

  .state('offerDetails', {
    url: '/offer/:offerId',
    templateUrl: 'views/offers/show.html',
    controller: 'OfferShowController'
  });

}]);

var models = angular.module('gosukaAppModel', ['ngResource']);