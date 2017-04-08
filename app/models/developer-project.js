import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
} = DS;

export default Model.extend({
  project: belongsTo('project'),
  developer: belongsTo('developer'),
  role: attr('string'),
  involvementRate: attr('number'), // from 0 to 1
});
