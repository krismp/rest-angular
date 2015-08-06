'use strict';

osukaApp.controller('OfferIndexController', ['$scope', 'Offer',
  function($scope, Offer) {

    init();

    function init() {
      Offer.query(function(response) {
        console.log(response);
        $scope.offers = response;
      }, function(error) {
        console.log(error);
      });
    }
  }
]);