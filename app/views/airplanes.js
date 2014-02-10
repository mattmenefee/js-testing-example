define(
  [
    'lib/backbone-amd/backbone',
  ],
  function(Backbone) {
    return Backbone.View.extend({

      initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
      },

      render: function() {
        this.$el.text(this.collection.tailNumbers().join(' '));
      }

    });
  }
);
