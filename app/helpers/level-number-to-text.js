import Ember from 'ember';

const levels = [
  'trainee',
  'junior',
  'middle',
  'senior',
  'architect',
];

export function levelNumberToText([level]/*, hash*/) {
  return levels[level];
}

export default Ember.Helper.helper(levelNumberToText);
