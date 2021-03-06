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

Meteor.publish("meals", function(){

  return Meals.find({owner: this.userId});
})



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

  },
  addNewSet: function(param){

    var date = new Date();
    Sets.insert({

      date: date,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      wId: param.wId,
      eId: param.eId,
      reps: param.reps,
      weight: param.weight

    });

  },
  deleteWorkout: function(id){

    Workouts.remove(id);

  },
  deleteExercise: function(id){

    Exercises.remove(id);
  },
  deleteSet: function(id){

    Sets.remove(id);
  },
  editWorkoutName: function(id, newName){

    Workouts.update(id, {$set: {title: newName}});
  },
  editExerciseName: function(id, newName){

    Exercises.update(id, { $set: { name: newName} });
  },
  addJournal: function(text){

    var date = new Date();
    Journals.insert({

      date: date,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      text: text
    });
  },
  addMeal: function(text){

    var date = new Date();
    Meals.insert({

        date: date,
        owner: Meteor.userId(),
        username: Meteor.user().username,
        text: text


    });
  }

})
