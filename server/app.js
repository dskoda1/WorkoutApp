/* global Template */
/* global Session */
/* global Meteor */

  Meteor.startup(function () {
    // code to run on server at startup
  });
  
  
  
Meteor.publish("journals", function () {

    return Journals.find({ owner: this.userId });
  });

  Meteor.publish("workouts", function () {

    return Workouts.find({owner: this.userId});

  });

  Meteor.publish("exercises", function () {

    return Exercises.find({ owner: this.userId });

  });
  Meteor.publish("sets", function () {

    return Sets.find({ owner: this.userId });

  });