import Ember from 'ember';

export function showInPercents([value]/*, hash*/) {
  return `${ Math.round(value * 100) }%`;
}

export default Ember.Helper.helper(showInPercents);
