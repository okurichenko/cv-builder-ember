import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

const {
  attr,
  belongsTo,
  hasMany,
} = DS;

export default MF.Fragment.extend({
  skill: belongsTo('skill'),
  tools: hasMany('tool'),
  experience: attr('number'), // in months
  level: attr('string'),
});
