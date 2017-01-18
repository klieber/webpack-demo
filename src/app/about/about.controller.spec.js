import AboutController from './about.controller';

describe('AboutController', () => {
  let $log = {
    info: function() {}
  };

  var ctrl = new AboutController($log);

  it('should have a title', () => {
    expect(ctrl.title).toBe('About');
  });
});
