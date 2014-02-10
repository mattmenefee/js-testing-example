define(
  [
    'jquery',
    'collections/airplanes',
    'views/airplanes',
  ],
  function($, AirplanesCollection, AirplanesView) {
    $(function() {
      var airplanes = new AirplanesCollection();
      new AirplanesView({
        el: $('#app'),
        collection: airplanes,
      });
      airplanes.fetch({reset: true});
    });
  }
);
