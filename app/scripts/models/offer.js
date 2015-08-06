'use strict';

models.factory('Offer', ['$resource',
  function($resource) {
    var Offer = $resource(settings.endpoint() + '/posts/:offerId', null, {});

    return Offer;
  }
]);