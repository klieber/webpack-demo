import angular from 'angular';

import HomeComponent from './home.component';
import HomeRoute from './home.route';

const MODULE_NAME = 'app.home';

angular.module(MODULE_NAME, [])
  .component(HomeComponent.$NAME, HomeComponent)
  .config(HomeRoute);

export default MODULE_NAME;
