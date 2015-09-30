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
	'isActiveExercise': function(){
		var eId = Session.get('currentExerciseId');
		
		if(eId === this._id)
			return true;
		else return false;
		
		
	},
	'isActiveExerciseForSet': function(){
		var eId = Session.get('currentExerciseId');
		
		if(eId === this.eId)
			return true;
		else return false;	
	},
	"notEditingWorkout": function(){
		
		var wid = Session.get('currentWorkoutId');

		if (wid === this._id)
			return false;
		else return true;
		
		
	},
	'notDeletingExercise': function () {

		var id = Session.get("attemptDeleteExerciseId");

		if (id === this._id)
			return false;
		else return true;
	},
	'deletingWorkout': function(){
		
		var id = Session.get("attemptDeleteWorkoutId");
		if(id === this._id) 
			return true;
		else return false;
		
	}


});

Template.oldWorkout.events({

	//Edit the workout 
	"click #editWorkout": function () {
		Session.set("currentWorkoutId", this._id);
	},
	"click #saveWorkout": function(){
		//Check for a change of name
		var newName = document.getElementById("workoutNameInput").value;
		
		Meteor.call("editWorkoutName", this._id, newName);	
		Session.set("currentWorkoutId", 0);
		Session.set("currentExerciseId", 0);
		Session.set("attemptDeleteExerciseId", 0);
		Session.set("attemptDeleteWorkoutId", 0);
		
	},
	"click #deleteWorkout": function(){
		Session.set("attemptDeleteWorkoutId", this._id);
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
	},
	'click #confirmDeleteWorkout': function(){
		Meteor.call("deleteWorkout", this._id);
		Session.set("attemptDeleteExerciseId", 0);
		Session.set("attemptDeleteWorkoutId", 0);
		Session.set("currentWorkoutId", 0);
		Session.set("currentExerciseId", 0);
		
	},
	'click #deleteSet': function(){
		Meteor.call("deleteSet", this._id);		
	},
	'click #confirmSaveExercise': function(){
		
		var newName = document.getElementById("currentExerciseName").value;


		Meteor.call("editExerciseName", this._id, newName);
		
		//Make it not the active exercise anymore
		Session.set("currentExerciseId", 0);
		
	},
	'click #cancelSaveExercise': function(){
		
		Session.set("currentExerciseId", 0);
	}

})