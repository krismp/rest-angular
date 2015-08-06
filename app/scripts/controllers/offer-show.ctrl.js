'use strict';

osukaApp.controller('OfferShowController', ['$stateParams', '$scope', 'Offer',
  function($stateParams, $scope, Offer) {

    $scope.offer = Offer.get({offerId: $stateParams.offerId});

  }
]);
