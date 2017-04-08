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
  position: attr('string'),
  level: attr('number'),

  education: fragmentArray('string'),
  photos: fragmentArray('photo'),
  languages: fragmentArray('language'),
  certificates: fragmentArray('certificate'),
  personalQualities: fragmentArray('personal-quality'),
  developerSkills: hasMany('developer-skill'),

  projects: hasMany('developer-project'),
  cvs: hasMany('cv')
});
