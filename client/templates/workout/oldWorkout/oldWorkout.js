Session.setDefault("attemptDeleteExerciseId", 0);
Session.setDefault("attemptDeleteWorkoutId", 0);



Template.oldWorkout.helpers({

	'getExercises': function () {

		var exercises = Exercises.find({ wId: this._id });

		return exercises;

	},
	'getSets': function () {

		var sets = Sets.find({ eId: this._id });

		return sets;
	},
	'isActiveWorkout': function () {

		var wid = Session.get('currentWorkoutId');

		if (wid === this.wId)
			return true;
		else return false;

	},
	"notEditingWorkout": function(){
		
		var wid = Session.get('currentWorkoutId');

		if (wid === this.wId)
			return false;
		else return true;
		
		
	},
	'notDeletingWorkout': function(){
		
		
		var id = Session.get("attemptDeleteWorkoutId");;

		if (id === this._id)
			return false;
		else return true;
		
		
	},
	'notDeletingExercise': function () {

		var id = Session.get("attemptDeleteExerciseId");

		if (id === this._id)
			return false;
		else return true;
	}


});

Template.oldWorkout.events({

	//Edit the workout 
	"click #editWorkout": function () {
		Session.set("currentWorkoutId", this._id);
	},
	//Start the delete process for an exercise
	"click #deleteExercise": function () {
		Session.set("attemptDeleteExerciseId", this._id);
	},
	//Add sets to an exercise
	"click #editExercise": function () {
		Session.set("currentExerciseId", this._id);
	},
	//Delete an exercise
	"click #confirmDeleteExercise": function () {
		Meteor.call("deleteExercise", this._id);
	},
	//Cancel the deletion of an exercise
	"click #cancelDeleteExercise": function () {
		Session.set("attemptDeleteExerciseId", 0);
	}

})