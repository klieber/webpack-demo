import angular from 'angular';

import UiRouter from '@uirouter/angularjs';

import HomeModule from './home/home.module';
import AboutModule from './about/about.module';
import RouteConfig from './config/route.config';

angular.module('app', [
  UiRouter,
  HomeModule,
  AboutModule
]).config(RouteConfig);
