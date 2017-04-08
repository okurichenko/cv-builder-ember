import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
} = DS;

export default Model.extend({
  skill: belongsTo('skill'),
  name: attr('string'),
});
