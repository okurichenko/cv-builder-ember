import Ember from 'ember';

const {
  Controller,
  inject: { controller },
  computed: { reads, filter, setDiff, alias },
} = Ember;

export default Controller.extend({
  developer: alias('model'),
  dashboardController: controller('secured.dashboard'),
  filterSkillsIds: reads('dashboardController.filterSkillsIds'),

  matchedSkills: filter('developer.developerSkills', function (ds) {
    return this.get('filterSkillsIds').includes(ds.get('skill.id'));
  }),

  unmatchedSkills: setDiff('developer.developerSkills', 'matchedSkills'),
});
