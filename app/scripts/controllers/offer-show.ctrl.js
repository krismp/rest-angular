'use strict';

gosukaApp.controller('OfferShowController', ['$stateParams', '$scope', 'Offer',
  function($stateParams, $scope, Offer) {

    $scope.offer = Offer.get({offerId: $stateParams.offerId});

  }
]);
