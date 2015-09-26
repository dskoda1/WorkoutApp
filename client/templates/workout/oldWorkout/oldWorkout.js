Template.oldWorkout.helpers({

	'getExercises': function () {

		var exercises = Exercises.find({ wId: this._id });

		return exercises;

	},
	'getSets': function () {

		var sets = Sets.find({ eId: this._id });

		return sets;



	},
	'thisWorkoutIsEdit': function () {

		var isEdit = Session.get("currentWorkoutEditId");
		if (isEdit === this._id)
			return true;
		else return false;

	},
	'thisWorkoutAttemptDelete': function () {

		var isDelete = Session.get("attemptDeleteWorkoutId");

		if (isDelete) {
			return true;
		}
		else {
			return false;
		}

	}






});

Template.oldWorkout.events({

	"click #editWorkout": function () {
		var currentWorkoutEditId = Session.get("currentWorkoutEditId");
		Session.set("attemptDeleteWorkoutId", 0);
		if (currentWorkoutEditId !== this._id) {
			Session.set("currentWorkoutEditId", this._id);
			Session.set("currentExerciseId", 0);
		}
		else {
			Session.set("currentWorkoutEditId", 0);
			Session.set("currentExerciseId", 0);
		}

	},

	"click #deleteWorkout": function () {

		Session.set("attemptDeleteWorkoutId", this._id);

	},
	"click #confirmDeleteWorkout": function () {

		Meteor.call("deleteWorkout", this._id);
		Session.set("attemptDeleteWorkoutId", 0);

	},




})