import angular from 'angular';

import UiRouter from 'angular-ui-router';

import HomeModule from './home/home.module';
import RouteConfig from './home/home.route';

angular.module('app', [
  UiRouter,
  HomeModule
]).config(RouteConfig);
