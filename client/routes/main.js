// Router global configuration.
Router.configure({
  layoutTemplate: 'main',
  // Prealoder template to render when using 'waitOn' for subscriptions.
  loadingTemplate: 'preloader',
});

// Use the 'authorize' plugin for the specified route only.
Router.plugin('authorize', {
  only: [
    'someProtectedPage'
  ]
  // except: [
  //   'someNotProtectedPage'
  // ]
});

// A basic routes
Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/some-page', {
  name: 'somePage',
  // If not specified, the route would use 'SomePageController'.
  controller: 'SomeController'
});

// Route with a paramater accessed via 'this.params.someParam'.
Router.route('/some-page/:someParam', {
  name: 'somePageWithParam',
  controller: 'SomeController'
});
