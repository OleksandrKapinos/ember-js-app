import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('users');
  this.route('posts');
  this.route('user-posts', {path: '/posts-of-user/:id'});
  this.route('user-info', {path: '/users/:id'});
  this.route('post-info', {path: '/posts/:id'});
});
