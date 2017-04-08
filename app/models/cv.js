import DS from 'ember-data';
import {
  fragmentArray,
} from 'ember-data-model-fragments/attributes';

const {
  Model,
  attr,
  hasMany,
  belongsTo,
} = DS;

export default Model.extend({
  greeting: attr('string'),
  developer: belongsTo('developer'),
  skills: fragmentArray('developer-skill'),
});
