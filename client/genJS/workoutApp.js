/* global Journals */
/* global Mongo */
/* global Accounts */
/* global Meteor */
/* global Template */
/* global Session */

Journals = new Mongo.Collection("journals");

  Meteor.startup(function () {
    // code to run on server at startup
  });


  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
  
  