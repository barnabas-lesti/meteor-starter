Router.configure({
  layoutTemplate: 'main'
});

Router.route('/some-page', function () {
  this.render('somePage');
}, {
  name: 'somePage'
});

Router.route('/another-page', function () {
  this.render('anotherPage');
}, {
  name: 'anotherPage'
});
