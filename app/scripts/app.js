'use strict';

/**
 * @ngdoc overview
 * @name pokedexApp
 * @description
 * # pokedexApp
 *
 * Main module of the application.
 */
angular
  .module('pokedexApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listapokemon', {
        templateUrl: 'views/listapokemon.html',
        controller: 'ClistapokemonCtrl',
        controllerAs: 'listapokemon'
      })
      .when('/buscapokemon/:id', {
        templateUrl: 'views/buscapokemon.html',
        controller: 'CbuscapokemonCtrl',
        controllerAs: 'buscapokemon'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
