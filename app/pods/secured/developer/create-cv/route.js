import Ember from 'ember';

const {
  RSVP: { hash },
  Route,
} = Ember;

export default Route.extend({
  model(params) {
    return hash({
      developer: this.store.find('developer', params.developer_id),
      skills: this.store.findAll('skill'),
    }).then(({ developer, skills }) => {
      const cv = this.store.createRecord('cv');
      cv.set('developer', developer);
      return {
        cv,
        developer,
        skills,
      };
    });
  }
});
