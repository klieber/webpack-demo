import aboutTemplate from './about.html';
import AboutController from './about.controller';

const AboutComponent = {
  $NAME: 'aboutComponent',
  template: aboutTemplate,
  controller: AboutController,
  controllerAs: 'about'
};

export default AboutComponent;