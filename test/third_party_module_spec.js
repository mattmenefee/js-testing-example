define(['lib/lodash-amd/compat/main'], function(_) {

  describe('lodash', function() {

    it('is available', function() {
      var people = [
        {firstName: 'Carlos', lastName: 'Lalimarmo'},
        {firstName: 'Alex', lastName: 'Trebek'},
        {firstName: 'Rob', lastName: 'Lowe'},
      ];
      var firstNameOf = function(obj) { return obj.firstName };

      expect(_.map(people, firstNameOf)).to.deep.equal([
        'Carlos',
        'Alex',
        'Rob'
      ]);
    });

  });

});
