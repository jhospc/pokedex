'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.pokemonservice
 * @description
 * # pokemonservice
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
  .service('pokemonservice', function (Config, $q, $http, $routeParams) {

    //lista pokemons
    function listado(){
    	var deferred = $q.defer();
    	//var config = 'https://pokeapi.co/api/v2/pokemon/?limit=1000';
      //var config = config.POKE_LIST;

    	//$http.get(config)
        $http.get(Config.POKE_URL + Config.POKE_LIST)
        //$http.get(config)
    		.then(function(response){
    			deferred.resolve(response);
    		});

    		return deferred.promise;
	}

    //busca pokemons
    function busca(){
        var deferred = $q.defer();
        //var config = 'http://pokeapi.co/api/v2/pokemon/';
        //var config = config.POKE_LIST;

        $http.get(Config.POKE_URL + Config.POKE_ID + $routeParams.id)
        //$http.get(Config.POKE_LIST)

            .then(function(response){
                deferred.resolve(response);
            });

            return deferred.promise;
    }

    function especie(){
      var deferred = $q.defer();
      $http.get(Config.POKE_URL +  Config.POKE_ESP + $routeParams.id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function evolucion(dir){
      var deferred = $q.defer();
      $http.get(dir)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

	return {
	    	listado: listado,
        busca: busca,
        evolucion:evolucion,
        especie:especie,
	};
  });
