import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',

  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this._super(...arguments);
    return baseUrl.replace('-', '_');
  }
});
