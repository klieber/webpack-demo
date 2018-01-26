import template from './about.html';
import AboutController from './about.controller';

const AboutComponent = {
  $NAME: 'aboutComponent',
  template: template,
  controller: AboutController,
  controllerAs: 'about'
};

export default AboutComponent;
