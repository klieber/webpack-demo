import HomeComponent from './home.component';

function StateConfig($stateProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: HomeComponent.$NAME
    });
}

export default StateConfig;
