'use strict';

gosukaApp.controller('OfferIndexController', ['$scope', 'Offer',
  function($scope, Offer) {

    init();

    function init() {
      Offer.query(function(response) {
        $scope.offers = response;
      }, function(error) {
        console.log(error);
      });
    }
  }
]);