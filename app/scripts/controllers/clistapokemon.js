'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:ClistapokemonCtrl
 * @description
 * # ClistapokemonCtrl
 * Controller of the pokedexApp
 */

angular.module('pokedexApp')
  .controller('ClistapokemonCtrl', 
  	function ($scope, pokemonservice) {
    	pokemonservice.listado()
    		.then(function(response){
    			$scope.pokemons = response.data.results; //data
    		});

  });


/*
angular.module('pokedexApp', [])
.controller('ClistapokemonCtrl', function($scope, $http) {
    $http.get('https://pokeapi.co/api/v2/pokemon/?limit=1000').
        then(function(response) {
            $scope.pokemons = response.data;
        });
});
*/
