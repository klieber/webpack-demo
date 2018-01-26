import angular from 'angular';

import AboutComponent from './about.component';
import StateConfig from './about.state';

const MODULE_NAME = 'app.about';

angular.module(MODULE_NAME, [])
  .component(AboutComponent.$NAME, AboutComponent)
  .config(StateConfig);

export default MODULE_NAME;
