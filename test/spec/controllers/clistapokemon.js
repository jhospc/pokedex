'use strict';

describe('Controller: ClistapokemonCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var ClistapokemonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClistapokemonCtrl = $controller('ClistapokemonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClistapokemonCtrl.awesomeThings.length).toBe(3);
  });
});
