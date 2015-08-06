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
    'production': 'http://gosukaapi-v2.elasticbeanstalk.com'
  },

  endpoint: function() {
    return settings.endpoints[currentEnv];
  }
};

var gosukaApp = angular.module('angularApp', [
  'gosukaAppModel',
  'ngResource',
  'ngRoute',
  'ui.router',
]);
