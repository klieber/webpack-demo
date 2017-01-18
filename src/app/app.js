import angular from 'angular';

import HomeModule from './home/home.module';
import AboutModule from './about/about.module';
import RouteConfig from './app.route';

import UiRouter from 'angular-ui-router';

import '../style/app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [UiRouter, HomeModule, AboutModule])
  .config(RouteConfig);

export default MODULE_NAME;
