import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      developers: this.store.findAll('developer'),
      skills: this.store.findAll('skill'),
    });
  },
});
