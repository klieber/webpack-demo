import HomeComponent from './home.component';

function RouteConfig($urlRouterProvider, $stateProvider) {

  console.log('init router');
  $stateProvider
    .state('home', {
      url: '/home',
      component: HomeComponent.$NAME
    });

  $urlRouterProvider.otherwise('/');
}

export default RouteConfig;
