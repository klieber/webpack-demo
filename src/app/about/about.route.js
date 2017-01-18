import AboutComponent from './about.component';

function AboutRoute($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      component: AboutComponent.$NAME
    });
}

export default AboutRoute;
