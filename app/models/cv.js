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
  greeting: attr('string'),
  developer: belongsTo('developer'),
  skills: fragmentArray('developer-skill'),
  photo: fragment('photo'),
});
