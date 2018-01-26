import angular from 'angular';

import HomeComponent from './home.component';
import StateConfig from './home.state';

const MODULE_NAME = 'app.home';

angular.module(MODULE_NAME, [])
  .component(HomeComponent.$NAME, HomeComponent)
  .config(StateConfig);

export default MODULE_NAME;
