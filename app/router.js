import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('secured', { path: '/' }, function() {
    this.route('dashboard', { path: '/' });
    this.route('developer', function() {
      this.route('index', { path: ':developer_id' });
      this.route('create-cv', { path: '/create-cv/:developer_id' });
      this.route('view-cv', { path: '/view-cv/:cv_id' });
    });
  });
});

export default Router;
