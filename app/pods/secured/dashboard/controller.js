import Ember from 'ember';

export default Ember.Controller.extend({
  filterSkills: [],
  filterSkillsIds: Ember.computed.mapBy('filterSkills', 'skillId'),

  searchQuery: '',

  filteredDevelopers: Ember.computed('model.[]', function() {
    const filterSkills = this.get('filterSkills');
    return this.get('model').filter((dev) => {
      return dev.get('skills').filter((ds) => {
        return filterSkills.filter((fs) => (ds.get('skill.id') === fs.get('skillId')) && (ds.get('skill.level') >= fs.get('level')));
      }).get('length') > 0;
    });
  }),

  actions: {
    search() {

    },

    skillSelected(event) {
      if (event.target.checked) {
        this.get('filterSkills').pushObject({
          skillId: 1,
          level: 0,
        });
      } else {
        const filterSkill = this.get('filterSkills').findBy('skillId', 1);
        this.get('filterSkills').removeObject(filterSkill);
      }
    },

    skillLevelChanged(id, value) {
      console.log(id, value);
    },
  },
});
