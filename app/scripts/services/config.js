'use strict';

angular.module('pokedexApp')
  .constant('Config', {
    POKE_FULL : 'http://pokeapi.co/api/v2/pokemon/?limit=1000',
    POKE_URL : 'http://pokeapi.co/api/v2/',
    POKE_LIST: 'pokemon/?limit=1000',
  	POKE_TYPE: 'type/',
  	POKE_EVO : 'evolution-chain/',
    POKE_ESP: 'pokemon-species/',
    POKE_ID : 'pokemon/'
});
