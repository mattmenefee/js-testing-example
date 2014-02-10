define(
  [
    'lib/backbone-amd/backbone',
    'models/airplane'
  ],
  function(Backbone, AirplaneModel) {
    return Backbone.Collection.extend({
      model: AirplaneModel,
      url: 'api/airplanes.json',

      tailNumbers: function() {
        return this.pluck('tailNumber');
      },
    });
  }
);
