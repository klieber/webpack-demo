import HomeController from './home.controller';

describe('HomeController', () => {
  let $log = {
    info: function() {}
  };

  var ctrl = new HomeController($log);

  it('should have a title', () => {
    expect(ctrl.title).toBe('Home');
  });
});
