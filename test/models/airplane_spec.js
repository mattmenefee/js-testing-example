'use strict';

define(['models/airplane'], function(Airplane) {

  describe('Airplane', function() {

    var passengers;
    var instance;

    beforeEach(function() {
      passengers = [
        {name: 'Carlos'},
        {name: 'Ricky'},
      ];
      instance = new Airplane({passengers: passengers});
    });

    it('exposes a passenger count', function() {
      expect(instance.numberOnboard()).to.equal(2);
    });

    it('exposes a list of passengers', function() {
      expect(instance.passengerNames()).to.deep.equal(['Carlos', 'Ricky']);
    });

  });

});
