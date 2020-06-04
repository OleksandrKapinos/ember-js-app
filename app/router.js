import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('users', function() {
    this.route('user-info', {path: '/:user_id'});
  });
  this.route('posts');
  this.route('user-posts', {path: '/post-of-user/:user_id'});
  this.route('user-info', {path: '/user/:user_id'});
  this.route('post-info', {path: '/post/:post_id'}, function() {
  this.route('comment')});
});
