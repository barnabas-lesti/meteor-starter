// A basic authentication onBeforeAction hook.
Router.onBeforeAction(function() {
  if(Meteor.loggingIn()) { // If currently logging in, wait.
    return;
  } else if(!Meteor.user()) {
    this.redirect('home');
  } else {
    this.next();
  }
}, {
  // Initialize only/except for specified routes.
  only: [
    'adminShowcase'
  ]
  // except: [
  //   'home',
  //   'showcase',
  //   'showcaseWithParam'
  // ]
});
