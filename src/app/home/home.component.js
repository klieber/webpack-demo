import homeTemplate from './home.html';
import HomeController from './home.controller';

const HomeComponent = {
  $NAME: 'homeComponent',
  template: homeTemplate,
  controller: HomeController,
  controllerAs: 'home'
};

export default HomeComponent;
