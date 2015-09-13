// A basic authentication onBeforeAction plugin.
Iron.Router.plugins.authorize = function(router, options) {
  router.onBeforeAction(function() {
    if(Meteor.loggingIn()) { // If currently logging in, wait.
      return;
    } else if(!Meteor.user()) {
      this.redirect('home');
    } else {
      this.next();
    }
  }, options);
};
