'use strict';

describe('Service: pokemonservice', function () {

  // load the service's module
  beforeEach(module('pokedexApp'));

  // instantiate service
  var pokemonservice;
  beforeEach(inject(function (_pokemonservice_) {
    pokemonservice = _pokemonservice_;
  }));

  it('should do something', function () {
    expect(!!pokemonservice).toBe(true);
  });

});
