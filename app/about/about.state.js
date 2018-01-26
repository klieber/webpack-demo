import AboutComponent from './about.component';

function StateConfig($stateProvider) {
  $stateProvider
    .state({
      name: 'about',
      url: '/about',
      component: AboutComponent.$NAME
    });
}

export default StateConfig;
