import Ember from 'ember';

export default Ember.Controller.extend({
  email: null,
  password: null,

  actions: {
    submit() {
      const { email, password } = this.getProperties(['email', 'password']);

    },
  },
});
