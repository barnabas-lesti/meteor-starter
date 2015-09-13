// A basic publication of a data set.
Meteor.publish('somePublication', function() {
  return SomeCollection.find();
});

// Allow rules for the collection.
SomeCollection.allow({
  // insert: function(){
  //   return true;
  // },
  // update: function(){
  //   return true;
  // },
  // remove: function(){
  //   return true;
  // }
});

// Deny rules for the collection.
SomeCollection.deny({
  // insert: function(){
  //   return false;
  // },
  // update: function(){
  //   return false;
  // },
  // remove: function(){
  //   return false;
  // }
});
