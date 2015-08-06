'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
var currentEnv = 'dev';
var settings = {
  endpoints: {
    'dev': 'http://jsonplaceholder.typicode.com',
    'staging': '',
    'production': ''
  },

  endpoint: function() {
    return settings.endpoints[currentEnv];
  }
};

var osukaApp = angular.module('angularApp', [
  'osukaAppModel',
  'ngResource',
  'ngRoute',
  'ui.router',
]);
