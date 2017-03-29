'use strict';

describe('Controller: CbuscapokemonCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var CbuscapokemonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CbuscapokemonCtrl = $controller('CbuscapokemonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CbuscapokemonCtrl.awesomeThings.length).toBe(3);
  });
});
