define(
  [
    'lib/backbone-amd/backbone',
  ],
  function(Backbone) {
    return Backbone.Model.extend({

      numberOnboard: function() {
        return this.get('passengers').length;
      },

      passengerNames: function() {
        return _.map(this.get('passengers'), function(passenger) {
          return passenger.name;
        });
      },

    });
  }
);
