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

  return Workouts.find({ owner: this.userId });

});

Meteor.publish("exercises", function () {

  return Exercises.find({ owner: this.userId });

});
Meteor.publish("sets", function () {

  return Sets.find({ owner: this.userId });

});



Meteor.methods({

  addNewWorkout: function (text) {

    var date = new Date();
    Workouts.insert({
      title: text,
      date: date,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      complete: false
    });
    return Workouts.findOne({ date: date })._id;
  },
  addNewExercise: function(param){
    
    var date = new Date();
    Exercises.insert({
      name: param.text,
      date: date,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      wId: param.wId
     
    });
    return Exercises.findOne({ date: date})._id;
    
  }



})