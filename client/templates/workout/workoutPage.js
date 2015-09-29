
  Session.setDefault("currentWorkoutId", 0);
  Session.setDefault("currentExerciseId", 0);
  Session.setDefault("currentWorkoutEditId", 0);

 

Template.WorkoutPage.helpers({
	
	
	'getWorkouts': function(){
		
		return Workouts.find({});
		
		
	},
	'activeWorkout': function(){
		
		var active = Session.get("currentWorkoutId");

		return !active;
		
	},
	'activeExercise': function(){
		
		var active = Session.get("currentExerciseId");

		return !active;
		
		
	},
	'getWorkout': function(){
		
		var id = Session.get("currentWorkoutId");
      return Workouts.findOne({ _id: id });
	},
	'getExercise': function(){
		
		var id = Session.get("currentExerciseId");
		return Exercises.findOne({_id: id});
		
		
		
	}
	
	
	
});