'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:CbuscapokemonCtrl
 * @description
 * # CbuscapokemonCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('CbuscapokemonCtrl',
  	function ($scope, pokemonservice) {
    	pokemonservice.busca()
    		.then(function(response){
    			$scope.pokemondata = response.data; //data
    		});
      pokemonservice.especie()
      	.then(function(response){
      		$scope.pokemonesp = response.data; //data

      var dir = $scope.pokemonesp.evolution_chain.url;

      pokemonservice.evolucion(dir)
      	.then(function(response){
      		$scope.pokemonevo = response.data; //data

      });
      });
});
