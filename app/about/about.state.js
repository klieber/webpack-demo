import AboutComponent from './about.component';

function StateConfig($stateProvider) {
  console.log('init about state');
  $stateProvider
    .state({
      name: 'about',
      url: '/about',
      component: AboutComponent.$NAME
    });
}

export default StateConfig;
