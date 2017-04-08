import DS from 'ember-data';
import {
  fragmentArray,
  fragment,
} from 'ember-data-model-fragments/attributes';

const {
  Model,
  attr,
  belongsTo,
} = DS;

export default Model.extend({
  developer: belongsTo('developer'),
  greeting: attr('string'),
  name: attr('string'),
  comment: attr('string'),
  skills: fragmentArray('developer-skill'),
  photo: fragment('photo'),
});
