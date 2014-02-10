define(['collections/airplanes'], function(AirplanesCollection) {

  describe('Airplanes collection', function() {

    it('can be fetched', function() {
      var collection = new AirplanesCollection();

      //stub sync
      collection.sync = function(method, models, options) {
        options.success([
          {tailNumber: 'A1', passengers: ['Ricky', 'Dan']},
          {tailNumber: 'B1', passengers: ['Charlie', 'Anna']},
          {tailNumber: 'C1', passengers: ['Melissa', 'Sally']},
        ]);
      };

      collection.fetch();
      expect(collection.models).to.not.be.empty;
    });

    it('exposes a list of tail numbers', function() {
      collection = new AirplanesCollection([
        {tailNumber: 'A1', passengers: ['Ricky', 'Dan']},
        {tailNumber: 'B1', passengers: ['Charlie', 'Anna']},
        {tailNumber: 'C1', passengers: ['Melissa', 'Sally']},
      ]);
      expect(collection.tailNumbers()).to.deep.equal(['A1', 'B1', 'C1']);
    });

  });

});
