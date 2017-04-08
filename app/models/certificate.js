import DS from 'ember-data';
import MF from 'ember-data-model-fragments';
import {
  fragmentArray,
} from 'ember-data-model-fragments/attributes';

const {
  attr,
  belongsTo,
} = DS;

export default MF.Fragment.extend({
  name: attr('string'),
  description: attr('string'),
  skill: belongsTo('skill'),
  photos: fragmentArray('photo'),
});
