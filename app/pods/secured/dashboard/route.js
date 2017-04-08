import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  model() {
    return [];
  //   return this.store.findAll('developer');
  },
});
