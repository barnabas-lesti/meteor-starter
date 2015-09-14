// Router global configuration.
Router.configure({
  layoutTemplate: 'main',
  // Prealoder template to render when using 'waitOn' for subscriptions.
  loadingTemplate: 'preloader',
});

// Route definitions.
Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/showcase', {
  // Defaults to 'showcase'.
  // name: 'renamedShowcase',
  // Defaults to 'ShowcaseController'.
  // controller: 'RenamedShowcaseController'
});

// Route with a paramater accessed via 'this.params.someParam'.
Router.route('/showcase/:someParam', {
  name: 'showcaseWithParam',
  template: 'showcase',
  data: function() {
    return {
      param: this.params.someParam
    };
  }
});

// A protected route (protected hook defined in: hooks.js).
Router.route('/admin/showcase', {
  name: 'adminShowcase'
});
