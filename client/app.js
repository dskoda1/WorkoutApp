/* global Journals */
/* global Mongo */
/* global Accounts */
/* global Meteor */
/* global Template */
/* global Session */



  Meteor.startup(function () {
    // code to run on server at startup
  });

 Meteor.subscribe("journals");
  Meteor.subscribe("workouts");
  Meteor.subscribe("exercises");
  Meteor.subscribe("sets");



Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
  
  