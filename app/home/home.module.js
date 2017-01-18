import angular from 'angular';

import HomeComponent from './home.component';
import RouteConfig from './home.route';

const MODULE_NAME = 'app.home';

angular.module(MODULE_NAME, [])
  .component(HomeComponent.$NAME, HomeComponent);
  // .config(RouteConfig);


export default MODULE_NAME;
