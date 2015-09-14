ShowcaseController = RouteController.extend({
  // Template to render.
  template: 'showcase',
  // Subscribes when the route is called, unsubscribes when navigated elsewhere.
  // Called before core hooks. Could be 'subscriptions', that way the loading
  // indicator would not be shown.
  waitOn: function() {
    // All subscription handles for this route.
    return [
      Meteor.subscribe('somePublication')
    ];
  },
  // subscriptions: function() {
  //   return [
  //     Meteor.subscribe('somePublication', arg)
  //   ];
  // },
  data: function() {
    return {
      hash: this.params.hash,
      // We could use a simple object here, but if we create a function that
      // returns an object, Meteor can reactively update this specific part.
      someSessionData: function() {
        return Session.get('someSessionData');
      }
    };
  },
  action: function() {
    this.render();
    // if(this.ready()) {
    //   this.render();
    // } else {
    //   this.render('preloader');
    // }
  }
});
