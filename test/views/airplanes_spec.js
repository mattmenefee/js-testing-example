define(
  [
    'lib/backbone-amd/backbone',
    'views/airplanes',
  ],
  function(Backbone, AirplanesView) {

    describe('Airplanes view', function() {

      var collection;

      it('shows a tail number for each plane', function() {
        collection = new Backbone.Collection();
        collection.tailNumbers = function() {
          return ['A1', 'B1', 'C1'];
        };
        //stub sync, to allow fetching without api integration
        collection.sync = function(method, models, options) {
          options.success();
        };

        var view = new AirplanesView({collection: collection});
        collection.fetch();

        expect(view.$el.text()).to.match(/A1/);
        expect(view.$el.text()).to.match(/B1/);
        expect(view.$el.text()).to.match(/C1/);
      });

    });

  }
);
