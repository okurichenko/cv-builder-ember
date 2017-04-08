import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

const {
  attr,
  belongsTo,
} = DS;

export default MF.Fragment.extend({
  name: attr('string'),
  description: attr('string'),
  skill: belongsTo('skill'),
  duration: attr('number'), // in months
});
