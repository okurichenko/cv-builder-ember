import DS from 'ember-data';
import {
  fragmentArray,
} from 'ember-data-model-fragments/attributes';

const {
  Model,
  attr,
  hasMany,
} = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  education: attr('string'),

  photos: fragmentArray('photo'),
  languages: fragmentArray('language'),
  certificates: fragmentArray('certificate'),
  personalQualities: fragmentArray('personal-quality'),
  skills: fragmentArray('developer-skill'),

  projects: hasMany('developer-project'),
  cvs: hasMany('cv')
});
