import angular from 'angular';

import AboutComponent from './about.component';
import AboutRoute from './about.route';

const MODULE_NAME = 'app.about';

angular.module(MODULE_NAME, [])
  .component(AboutComponent.$NAME, AboutComponent)
  .config(AboutRoute);

export default MODULE_NAME;
