import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

const {
  attr,
} = DS;

export default MF.Fragment.extend({
  name: attr('string'),
  description: attr('string'),
});
