import HomeComponent from './home.component';

function StateConfig($stateProvider) {
  console.log('init home state');
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: HomeComponent.$NAME
    });
}

export default StateConfig;
