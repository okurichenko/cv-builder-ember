import Ember from 'ember';

export default Ember.Controller.extend({
  filterSkills: [],
  filterSkillsIds: Ember.computed.mapBy('filterSkills', 'skillId'),

  searchQuery: '',

  filteredDevelopers: Ember.computed('model.developers.[]', 'filterSkills.[]', 'filterSkills.@each.level', function() {
    const filterSkills = this.get('filterSkills');
    if (!this.get('filterSkills.length')) {
      return this.get('model.developers');
    }
    return this.get('model.developers').filter((dev) => {
      return dev.get('developerSkills').filter((ds) => {
        return filterSkills.filter((fs) => {
          return (ds.get('skill.id') == Ember.get(fs, 'skillId'))
            && (ds.get('level') >= Ember.get(fs, 'level'));
        }).get('length') > 0;
      }).get('length') > 0;
    });
  }),

  filteredSkills: Ember.computed('model.skills.[]', 'searchQuery.length', function () {
    const searchQuery = this.get('searchQuery');
    return this.get('model.skills').filter(ms => ms.get('name').startsWith(searchQuery));
  }),

  actions: {
    skillSelected(skillId, event) {
      if (event.target.checked) {
        this.get('filterSkills').pushObject({
          skillId,
          level: 0,
        });
      } else {
        const filterSkill = this.get('filterSkills').findBy('skillId', skillId);
        this.get('filterSkills').removeObject(filterSkill);
      }
    },

    skillLevelChanged(skillId, value) {
      const filterSkill = this.get('filterSkills').find((fs) => Ember.get(fs, 'skillId') == skillId);
      Ember.set(filterSkill, 'level', value);
    },
  },
});
