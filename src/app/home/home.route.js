import HomeComponent from './home.component';

function HomeRoute($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: HomeComponent.$NAME
    });
}

export default HomeRoute;
